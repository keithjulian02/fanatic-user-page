import React, { useState } from 'react'
import { Collapse } from 'react-collapse';


const Faq = () => {
    const arr = [{
        question: `How will my copy of Fanatic be shipped?`, answer: `Fanatic is a digital 
        artwork program so after buying, you will be given a serial key which you can use to 
        activate your copy of Fanatic. This serial key is bound to your account details and can 
        be viewed at any time in your User Profile along with other necessary details!`, isCollapse: false
    },
    {
        question: `How many devices are supported in one subscription of Fanatic?`, answer: `The 
        number of devices one license of Fanatic can be used for depends on the plan you choose. 
        Basic allows you to bind your license to 2 accounts on any platform, Standards allows for
         3 accounts on any platform and Professional allows for 5 accounts on any platform. If 
         you choose to get more account permissions, they will cost extra depending on the plan 
         you choose to buy them in.`, isCollapse: false
    },
    {
        question: `What platforms is Fanatic available on?`, answer: `For the time being, 
        Fanatic is bought to life by a team of highly curated developers for Microsoft Windows, 
        MacOS, iOS and Android devices. Your account data is shared between every platform so
         you can access your files, licenses, assets and settings on any platform granted it 
         is logged into the same account.`, isCollapse: false
    },
    {
        question: `How long will one license subscription of Fanatic last?`, answer: `The prices
         for the plans stated above are on a per month basis, where you can pay every month at
          your own leisure and unsubscribe at any given time. More details on unsubscribing 
          and refunding policies are in the FAQ below.`, isCollapse: false
    },
    {
        question: `How do I unsubscribe from my license of Fanatic? Is refunding a possible option? `, 
        answer: `Your Fanatic subscription is billed on a monthly basis, so if you feel like you're not
         enjoying the program or simply do not have the time to work on it, you can freely unsubscribe 
         from your license by not paying the next month. Unfortunately, subscriptions cannot be refunded 
         or cancelled mid-month as it is a one-time payment every 30 days.`, isCollapse: false
    },
    {
        question: `What artwork devices are supported with Fanatic?`, answer: `Fanatic has partnered
         up with almost every major graphic tablet company in the market to provide the best possible 
         experience for its customers. It has dedicated drivers for specific drawing tablet brands 
         including, but not limited to, Wacom, Huion, XP-Pen, Apple, GAOMON etc. In case of any issue
          with a specific device, you can freely submit a support ticket to us and 
          we can look into it!`, isCollapse: false
    },
    {
        question: `How can you download assets from the online store?`, answer: `Fanatic's Asset 
        store has everything you can possibly need as a digital artist, animator or illustrator.
         It has brushes, stencils, models, and assets for everything from flora, humans, 
         furniture, industrial equipment, you name it! In order to download an asset, simply 
         open its page and click on the download button. Fanatic will handle the rest and you 
         can find that asset in its respective panel in the program itself.`, isCollapse: false
    },
    {
        question: `How can I submit a Support Ticket to the support team?`, answer: `Support Tickets are
        a subscription-only feature for accounts that have a Fanatic license of any tier. You can simply
        go to your User Profile, and submit a ticket in the dedicated Tickets Section on the bottom of the 
        page. Choose what kind of issue you're facing (Program, OS, Device), a description of the issue
        and let our support team handle the rest!`, isCollapse: false
    }
    ]
    const [state, setState] = useState(arr);

    return (

        <section className='faq_section'>
            <div className="container">
                <div className='faq_title'>
                    <h1>Frequently Asked Questions</h1>
                </div>


                {state.map((obj, i) => (
                    <React.Fragment key={i}>
                        <div className="question" onClick={() => { state[i].isCollapse = !state[i].isCollapse; setState([...state]) }}>
                            <h3>{obj.question}</h3>
                            <span style={{ fontWeight: "bold" }}>&#43;</span>
                        </div>

                        <Collapse isOpened={obj.isCollapse}>
                            <div className="answer">
                                <p> {obj.answer} </p>
                            </div>
                        </Collapse>
                        <div className="faq_cont">

                        </div>
                    </React.Fragment>
                ))}


            </div>
        </section >
    )
}

export default Faq
