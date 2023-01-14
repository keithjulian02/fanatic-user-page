import React, { useState } from "react";

// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import EditableTable from "../components/Sections/EditableTable"
import StripeContainer from "../components/Sections/StripeContainer";

// Antd Components
import "antd/dist/reset.css";
import { Avatar, Typography, Input, Button } from 'antd';
import { AntDesignOutlined, MailOutlined, BorderlessTableOutlined, CalendarOutlined, EyeTwoTone, EyeInvisibleOutlined} from '@ant-design/icons';

//Styles
import "../style/profile.css";


export default function Profile() {
    const [showPayment, setShowPayment] = useState(false);
    const {Title} = Typography;
    const [customer, setCustomer] = useState({
        id: "1", 
        firstname: "Keith", 
        lastName: "Julian", 
        email: "keithjulian@gmail.com",
        password: "blackberrii",
        creationdate: "2022-02-23", 
        subscriptiontype: "",
        subscriptionpurchse: "2022-02-24",
        subscriptionexpiry: "2022-03-25",
        subscriptionkey: "ADGHK-ADSKG-ASH13-AETOU-WEITY"})
    const subscriptionType = customer.subscriptiontype
        
    return (
        <>
            <TopNavbar />

{/* User Profile */}

            <div className="main_cont" >
              <div className="userProfile_main">
                <div className="userProfileHeader" style={{ marginTop: "100px" }}>
                <Title className="title"><u>User Profile</u></Title>
                <Avatar className="avatar"
                    size={{ xs: 48, sm: 64, md: 80, lg: 128, xl: 150, xxl: 300 }}
                    icon={<AntDesignOutlined />}
                />
                <br/><br/>    
                <Title level={3}>Hello {customer.firstname} {customer.lastName}!</Title>  
             </div>

            <div className="userProfileDetails">
                
                <Button type="text" readOnly="true">Email: </Button>
                <Input className="inputButtonEmail" size="large" value={customer.email} prefix={<MailOutlined />} onChange={ e => setCustomer({ ...customer, email: e.target.value})}/>
                <Button className="editButtons" type="primary" onClick={() => alert("update email function here")}> Save Email</Button> 
                
                <br/><br/>
                
                <Button type="text" readOnly="true">Password </Button>
                <Input.Password className="inputButtonPassword" value={customer.password} iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                onChange={ e => setCustomer({ ...customer, password: e.target.value})}/>
                <Button className="editButtons" type="primary" onClick={() => alert("update password function here")}>Change Password</Button> <br/><br/>
                
                <Button type="text" readOnly="true">Account ID: </Button>
                <Input className="inputButtonID" size="large" value={customer.id} prefix={<BorderlessTableOutlined />} readOnly="true" />

                <br/><br/>
                
                <Button type="text" readOnly="true">Creation Date: </Button>
                <Input className="inputButtonAccountDate" size="large" value={customer.creationdate} prefix={<CalendarOutlined />} readOnly="true" />
                
                
                <br/><br/><br/>
            </div>
            </div>
    </div>

{/* Subscription Details */}
{/* If there is no subscription type, it shows the buying options, otherwise the subscription details with an unsubscribe button*/}

            <div className="SubscriptionDetails">
            <Title className="title"><u>Subscription Details</u></Title>
              {(subscriptionType === "") ?  
                <div className="userProfileDetails">
                <Title level={4} style={{textAlign: "center"}}> You have no ongoing subscriptions with Fanatic. Choose one of the three options below to buy a license!</Title>
                    <Button className="editButtons" type="primary" disabled> Basic Subscription ($9.99/mo) </Button> 
                    <Button className="editButtons" type="primary" onClick={() => setShowPayment(true)} >Standard Subscription ($19.99/mo)</Button> 
                    <Button className="editButtons" type="primary" disabled> Professional Subscription ($39.99/mo)</Button> 
              </div> 
              :             
              <div className="userProfileDetails">
              <Title level={4} style={{textAlign: "center"}}> You have one ongoing <b>{customer.subscriptiontype}</b> subscription with Fanatic that will last till <b>{customer.subscriptionexpiry}</b>.
              <br/>Your subscription key is <b>{customer.subscriptionkey}</b>.<br/>You can click below to unsubscribe to your license.</Title>
              <Button className="editButtons" type="primary" danger onClick={() => alert("unsubscribe function here")}> Unsubscribe</Button>
              </div>
              }
        <br/>

{/* When the subscription option is selected, it renders the StripeJS frontend container */}

              {(showPayment === true) ? <StripeContainer/> : null}
            </div>
            <br/>
            <br/>
            
{/* Ticket Table */}

        <div className="ticketTable">
            <Title className="title"><u>Your Tickets</u></Title>
            <EditableTable />
        </div>
           
            <Footer />
        </>
    );
}


