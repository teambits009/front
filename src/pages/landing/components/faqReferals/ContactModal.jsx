import { Form, Input, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';

const ContactModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setModalOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-[#015FF1] mt-[10px] text-white px-[20px] rounded w-max font-semibold justify-self-center  h-[40px] shadow-btn transition-all duration-300 ease-in-out"
      >
        Contact Us
      </button>
      <Modal
        title={
          <span
            style={{
              fontSize: '24px',
              color: '#015FF1',
              fontWeight: 'bold',
            }}
          >
            Contact Us
          </span>
        }
        centered
        open={modalOpen}
        confirmLoading={confirmLoading}
        onOk={handleOk}
        onCancel={() => setModalOpen(false)}
        okType="primary"
        okText="Send"
        okButtonProps={{
          style: {
            backgroundColor: '#015FF1',
            color: '#FFFFFF',
          },
        }}
      >
        <Form className="flex flex-col gap-5">
          <Input required placeholder="Full Name" />
          <Input required type="email" placeholder="Email Address" />
          <TextArea required placeholder="Message..." />
        </Form>
      </Modal>
    </div>
  );
};

export default ContactModal;
