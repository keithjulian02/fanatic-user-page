import { useState } from "react";

//Styles
import "../../style/table.css";

// Antd Components
import "antd/dist/reset.css";
import { Table, Modal, Input, Button, Form, Select } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function App() {
  const {TextArea} = Input;
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [searchedText, setSearchedText ] = useState("");
  const [dataSource, setDataSource] = useState([
    {
      key:1,
      ticketid: 22231,
      userid: 64748,
      email: "keithjulian@gmail.com",
      issuetype: "Program",
      ticketdate: "2022-02-23",
      ticketdescription: "The program is not booting up despite all the latest updates installed",
      ticketstatus: "New",
      },
    {
      key:2,
      ticketid: 22034,
      userid: 64748,
      email: "keithjulian@gmail.com",
      issuetype: "License",
      ticketdate: "2022-05-11",
      ticketdescription: "License renewed 2 days ago automatically",
      ticketstatus: "New",
      },
    { 
      key:3,
      ticketid: 29348,
      userid: 64748,
      email: "keithjulian@gmail.com",
      issuetype: "Program",
      ticketdate: "2022-02-23",
      ticketdescription: "Hello! \n Thank you for contacting us. \n Have you tried reinstalling the program if the dependencies are not working? \n The previous chat is attached below: \n hello my program isnt working. its giving a dx11 error",
      ticketstatus: "New",
      },
    {
      key:4,
      ticketid: 23083,
      userid: 64748,
      email: "keithjulian@gmail.com",
      issuetype: "Program",
      ticketdate: "2022-02-23",
      ticketdescription: "The program is not booting up despite all the latest updates installed",
      ticketstatus: "New",
      },
    {
      key:5,
      ticketid: 20385,
      userid: 64748,
      email: "keithjulian@gmail.com",
      issuetype: "Program",
      ticketdate: "2022-02-23",
      ticketdescription: "The program is not booting up despite all the latest updates installed",
      ticketstatus: "New",
      },
    {
      key:6,
      ticketid: 86746,
      userid: 64748,
      email: "keithjulian@gmail.com",
      issuetype: "Program",
      ticketdate: "2022-02-23",
      ticketdescription: "The program is not booting up despite all the latest updates installed",
      ticketstatus: "New",
      },
    
   ]);
  
// Ticket Table Columns

   const columns = [
    {
      key: "1",
      title: "Ticket ID",
      dataIndex: "ticketid",
      filteredValue: [searchedText],
      onFilter: (value,record) => {
        return String(record.id)
        .toLowerCase()
        .includes(value.toLowerCase()) ||
        String(record.ticketid)
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        String(record.userid)
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        String(record.email)
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        String(record.issuetype)
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        String(record.ticketdate)
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        String(record.ticketdescription)
          .toLowerCase()
          .includes(value.toLowerCase()) ||
          String(record.ticketstatus)
          .toLowerCase()
          .includes(value.toLowerCase())         
      }   
    },
    {
      key: "4",
      title: "Issue Type",
      dataIndex: "issuetype",
    },
    {
      key: "5",
      title: "Ticket Date",
      dataIndex: "ticketdate",
    },
    {
      key: "6",
      title: "Ticket Description",
      dataIndex: "ticketdescription",
    },
    {
      key: "7",
      title: "Ticket Status",
      dataIndex: "ticketstatus",
    },
    {
      key: "8",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditRecord(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteRecord(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

// Ticket Table Delete and Edit

 const onDeleteRecord = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this ticket?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((Customer) => Customer.ticketid !== record.ticketid);
        });
      },
    });
  };
  const onEditRecord = (record) => {
    setIsEditing(true);
    setEditingCustomer({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingCustomer(null);
  };
  
// Ticket Table Add
  const onAddTicket = () => {
    setIsAdding(true);
  };
  const resetAdding = () => {
    setIsAdding(false);
  };

// Front-end Render

  return (
    <div className="App">
      <header className="App-header">

{/* Search bar */}
        
        <Input.Search
          placeholder="Search any value here..."
          style={{ marginBottom: 20, marginTop: "2rem" , maxWidth: 800 }}
          onSearch ={(value)=>{
            setSearchedText(value)
          }}
          onChange={(e)=>{
            setSearchedText(e.target.value)
          }}
        />

{/* Add Record button */}

        <Button style={{ margin: 10 }} onClick={onAddTicket}>Submit a new Ticket</Button>
        
{/* Table Render */}

        <Table style={{ marginTop: 15 }} columns={columns} dataSource={dataSource}></Table>
        
{/* Editing Modal */}

        <Modal
          title="Edit Customer"
          open={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((Customer) => {
                if (Customer.ticketid === editingCustomer.ticketid) {
                  return editingCustomer;
                } else {
                  return Customer;
                }
              });
            });
            resetEditing();
          }}
        >
        <b>Ticket ID: </b> <Input
            value={editingCustomer?.ticketid} readOnly={true}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, ticketid: e.target.value };
              });
            }}/>
          <b>Issue Type: </b><Input
            value={editingCustomer?.issuetype}
            readOnly={true}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, issuetype: e.target.value };
              });
            }}/>
          <b>Ticket Date: </b><Input
            value={editingCustomer?.ticketdate}
            readOnly={true}
          onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, creationdate: e.target.value };
              });
            }}/>
          <b>Ticket Description: </b>
          <TextArea rows={6} placeholder="maxLength is 6" value={editingCustomer?.ticketdescription}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, ticketdescription: e.target.value };
              });
            }}
          />
    </Modal>

{/* Ticket Add modal */}
    <Modal
          title="Add Ticket"
          open={isAdding}
          okText="Save"
          onCancel={() => {
            resetAdding();
          }}
          onOk={() => alert("add record function here")}
        >
          <Form>
          <Form.Item label="Ticket Type">
        <Select>
          <Select.Option value="program">Program</Select.Option>
          <Select.Option value="license">License</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Ticket Description">
          <TextArea rows={5} />
        </Form.Item>
          </Form>
    </Modal>
      </header>
    </div>
  );
  }

export default App;