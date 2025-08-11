import React, {  useState } from "react";
import { Button, Modal, Form, Input, List, message } from "antd";
import { ListInventory, useDeleteInventory, useEditInventory } from "../Services/inventoryService";

const Dropdown = () => {
  //Fetch


  const { data , isLoading } = ListInventory();



  console.log("the data are",data)
  //delete
  const deleteMutation = useDeleteInventory();
  //update
  const editMutation = useEditInventory();

 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // AntD Form instance
  const [form] = Form.useForm();

  // Open modal 
  const showEditModal = (item) => {
    setEditingItem(item);
    form.setFieldsValue(item); 
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingItem(null);
    form.resetFields();
  };

  // Submit edited data
  const handleEditSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        editMutation.mutate(
          { id: editingItem.id, payload: values },
          {
            onSuccess: () => {
              message.success("Item updated successfully");
              setIsModalVisible(false);
              setEditingItem(null);
              form.resetFields();
            },
            onError: (error) => {
              message.error("Failed to update item");
              console.error(error);
            },
          }
        );
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  // Delete handler
  const handleDelete = (id) => {
    deleteMutation.mutate(id, {
      onSuccess: () => {
        message.success("Item deleted successfully");
      },
      onError: (error) => {
        message.error("Delete failed");
        console.error("Delete failed:", error);
      },
    });
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <List
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button key="edit" type="link" onClick={() => showEditModal(item)}>
                Edit
              </Button>,
              <Button key="delete" danger onClick={() => handleDelete(item.id)}>
                Delete
              </Button>,
            ]}
          >
            {item.name }
          </List.Item>
        )}
      />

      <Modal
        title="Edit Inventory Item"
        open={isModalVisible}
        onOk={handleEditSubmit}
        onCancel={handleCancel}
        okText="Save"
      >
        <Form form={form} layout="vertical" name="editInventoryForm">
          <Form.Item
            name="name" 
            label="Name"
            rules={[{ required: true, message: "Please input the name!" }]}
          >
            <Input />
          </Form.Item>

          {}
        </Form>
      </Modal>
    </>
  );
};

export default Dropdown;
