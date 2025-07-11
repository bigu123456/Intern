import {  useMutation, useQuery,useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { Table,message } from 'antd'



const Testapi = () => {
    
    // const {data}=useQuery(
    //     {
    //         queryKey:["todos"],
    //         queryFn:async()=>{
    //            const res=  await fetch("https://jsonplaceholder.typicode.com/comments")
    //            const data= await res.json()
    //            return data;
    //         }
    //     }
    // )
    // const {data}=useQuery(
    //     {
    //         queryKey:["todos"],
    //         queryFn:async()=>{
    //              const res=  await fetch("https://jsonplaceholder.typicode.com/comments")
    //              const data=res.json();
    //              return data;
                 
    //         }
    //     }
    // )
  const {data}=useQuery(
    {
        queryKey:["todos"],
        queryFn: async()=>{
             const res=  await fetch("https://jsonplaceholder.typicode.com/comments")
             const data=res.json();
             return data;
        }
    }
  )


    const deleteuser=async(userid)=>{
        await axios.delete(`https://jsonplaceholder.typicode.com/comments/${userid}`)
        return userid;

    }
    const queryClient = useQueryClient()
    

    
const deletemutation=useMutation({
    mutationFn:deleteuser,
    onSuccess :(deleteid)=>{
        message.success("success")
        queryClient.setQueryData(["todos"], (old)=>{
         return old?  old.filter(user=>user.id!==deleteid):[]
        
        })

    }
})

 

    const columns=[
        {
            title:"postid",
            dataIndex: "postId",
            key:"postid"
        },
         {
            title:"id",
            dataIndex: "id",
            key:"id"
        },
         {
            title:"name",
            dataIndex: "name",
            key:"name"
        },
         {
            title:"email",
            dataIndex: "email",
            key:"email"
        },
         {
            title:"body",
            dataIndex: "body",
            key:"body"
        },
        {
  title: "Action",
  key: "action",
  render: (_, record) => (
    <button onClick={() =>deletemutation.mutate(record.id)}>Delete</button>
  )
}

    ]
   
  return (
  <>
  <h1>learning api</h1>
  <Table dataSource={data} columns={columns} rowKey="id"></Table>
  </>
  )
}

export default Testapi