import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import { useInput } from '../../hooks/useInput'
import db from '../../base'

const AddPost = () => {
  const { value: title, bind: bindTitle, reset: resetTitle } = useInput('');
  const { value: desc, bind: bindDesc, reset: resetDesc } = useInput('');
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const postRef = db.collection('posts').add({
      title: title,
      descprition: desc
    })
    resetTitle()
    resetDesc()
  }
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (

    <>
      <Button type="primary" onClick={showModal}>
        Add Post
      </Button>
      <Modal footer centered width={800} closeIcon visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
        <form onSubmit={handleSubmit} className="font-sans">
          <div>
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-black mb-2" >
              Title
              </label>
            <input className="appearance-none w-full mb-6 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" {...bindTitle} />
          </div>
          <div>
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-black mb-2" >
              Decription
              </label>
            <textarea className="appearance-none w-full mb-6 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" {...bindDesc}>
            </textarea>
          </div>
          <button type="submit" className="mr-4 lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none rounded font-bold hover:bg-indigo-600 transition duration-200 ease-in-out">Create
          </button>
        </form>
      </Modal>
    </>
  )
}

export default AddPost
