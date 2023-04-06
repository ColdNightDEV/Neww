import React from "react";

type Props = {};

const Timeline = (props: Props) => {
  const timeline = [
    {
      month: "Months 1-3",
      header1: "Finalize the development of the website and software:",
      detail1:
        "During this time, our team will be working hard to put the finishing touches on our website and software. This may involve testing, debugging, and making any necessary changes to ensure that everything is running smoothly. Possible challenges during this phase could include technical issues, delays in development, or difficulty coordinating with team members.",
      header2: "Begin reaching out to companies to sign them up as merchants: ",
      detail2:
        "While our website and software are being finalized, we will also begin reaching out to companies to sign them up as merchants. This will involve identifying potential partners and pitching our service to them. Possible challenges during this phase could include difficulty finding interested companies, negotiating favorable terms, or effectively communicating the value of our service.",
      header3: "Develop a marketing plan: ",
      detail3:
        "In order to effectively promote our service and attract users, we will need to develop a comprehensive marketing plan. This may involve conducting market research, identifying our target audience, and developing a strategy for reaching them. Possible challenges during this phase could include difficulty identifying the most effective marketing channels, developing a compelling message, or allocating resources effectively.",
    },
    {
      month: "Months 4-6",
      header1:
        "Continue reaching out to companies to sign them up as merchants:",
      detail1:
        "During this time, we will continue to reach out to companies to sign them up as merchants. This may involve following up with companies we’ve already contacted or reaching out to new potential partners. Possible challenges during this phase could include difficulty building relationships with potential partners, overcoming objections or concerns, or managing a large pipeline of potential partners.",
      header2: "Launch the website and software:",
      detail2:
        "Once our website and software are ready, we will launch them to the public. This will involve promoting our service through our marketing channels and encouraging users to sign up for the waitlist. Possible challenges during this phase could include technical issues, difficulty attracting users, or managing a large influx of traffic to our website.",
      header3: "Onboard users to the waitlist:",
      detail3:
        "As users sign up for the waitlist, we will need to onboard them and provide them with information about our service. This may involve sending emails or providing in-app tutorials. Possible challenges during this phase could include difficulty engaging users, managing a large waitlist, or providing a seamless onboarding experience.",
    },
    {
      month: "Months 7-9",
      header1: "Release the site and software to the public: ",
      detail1:
        "Once we’ve onboarded users to the waitlist, we will release the site and software to the public. This will involve opening up our service to a wider audience and continuing to promote it through our marketing channels. Possible challenges during this phase could include technical issues, difficulty attracting users, or managing user expectations.",
      header2: "Continue to increase and add more options for users: ",
      detail2:
        "During this time, we will continue to work on improving our service by increasing and adding more options for users. This may involve partnering with more merchants or offering new products. Possible challenges during this phase could include difficulty finding interested partners, developing new features, or balancing user needs with business goals.",
      header3:
        "Partner with merchants to offer users products at competitive prices: ",
      detail3:
        "As we partner with more merchants, we will be able to offer users a wider range of products at competitive prices. This will involve negotiating deals with merchants and integrating their products into our service. Possible challenges during this phase could include difficulty finding interested partners, negotiating favorable terms, or managing relationships with multiple partners.",
    },
    {
      month: "Months 10-12",
      header1: "Implement the “buy now, pay later” system for cooking gas: ",
      detail1:
        "During this time, we will implement the “buy now, pay later” system for cooking gas. This will involve setting up the necessary infrastructure and processes to allow users to purchase cooking gas using our service. Possible challenges during this phase could include technical issues, difficulty integrating with merchants, or managing user expectations.",
      header2:
        "Monitor the performance of the system and make improvements as needed: ",
      detail2:
        "Once the “buy now, pay later” system is up and running, we will need to monitor its performance and make any necessary improvements. This may involve collecting feedback from users or analyzing data on usage patterns. Possible challenges during this phase could include difficulty identifying areas for improvement, implementing changes quickly enough to meet user needs or balancing user feedback with business goals.",
      header3:
        "Begin introducing other products into the “buy now, pay later” system: ",
      detail3:
        "As we continue to improve the “buy now pay later” system for cooking gas we can begin introducing other products into the system. This will involve partnering with more merchants and integrating their products into our service. Possible challenges during this phase could include difficulty finding interested partners who offer products that align with our vision or managing relationships with multiple partners while maintaining quality standards.",
    },
  ];

  return (
    <div className="text-white w-screen">
      <div className="w-full h-full flex flex-col md:justify-center items-center p-10 bg-[#08002A]">
        <div className="p-8">
          <div className="m-3 px-5 py-8 font-bold rounded-lg bg-[#11073f] text-3xl">
            <h1 className="text-center md:text-start ">Gnpay`s Timeline</h1>
          </div>
        </div>
        <div className="text-[14px] md:text-[20px] lg:text-[25px] xl:w-screen mt-3 m-2">
          {timeline.map((time, index) => (
            <ul className="w-[100vw]" key={index}>
              <li className="w-screen h-full border-b-2 border-t-2 border-[#fff]">
                <ul className="flex flex-col justify-between items-center">
                  <li className="p-10 bg-[#08002A] flex flex-col md:flex-row items-center justify-between m-2">
                    <p className="w-full font-bold m-2 px-3 py-5 text-center text-2xl rounded-lg bg-[#11073f]">
                      {time.month}:
                    </p>
                    <ul className="px-2 md:px-10 py-4">
                      <li className="md:px-5 px-1 py-2 text-[16px] md:text-2xl font-bold">
                        - {time.header1}
                      </li>
                      <li className="px-3 md:px-10 py-5 text-[14px] md:text-[20px] border-l-2 border-white rounded-sm">
                        {time.detail1}
                      </li>
                      <li className="md:px-5 px-1 py-2 text-[16px] md:text-2xl font-bold">
                        - {time.header2}
                      </li>
                      <li className="px-3 md:px-10 py-5 text-[14px] md:text-[20px] border-l-2 border-white rounded-sm">
                        {time.detail2}
                      </li>
                      <li className="md:px-5 px-1 py-2 text-[16px] md:text-2xl font-bold">
                        - {time.header3}
                      </li>
                      <li className="px-3 md:px-10 py-5 text-[14px] md:text-[20px]  border-l-2 border-white rounded-sm">
                        {time.detail3}
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
