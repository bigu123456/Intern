import React from "react";
import { Table} from "antd";
import { useApi } from "../elements/ApiContext";

const Fetch = () => {
  const { data, isLoading, isError, error } = useApi();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;





  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
     
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Status",
      dataIndex: "completed",
      key: "completed",
    render: (completed) => (
  completed ? <span>Completed</span> : <span>Not Completed</span>
)

    },
  ];

  return <Table dataSource={data} columns={columns} rowKey="id" />;
};

export default Fetch;
