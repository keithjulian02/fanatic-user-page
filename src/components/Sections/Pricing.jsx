import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Check Our Pricing!</h1>
            <p className="font16">
            Fanatic is priced in a variety of different monthly subscriptions depending on the features and purpose of use. Here are a few options for the pricing:
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="$9.99/mo"
                title="Basic"
                text="The basic necessities for beginners to the Fanatic ecosystem"
                offers={[
                  { name: "Base Fanatic Program", cheked: true },
                  { name: "24/7 Support", cheked: true },
                  { name: "Animated Brushes", cheked: false },
                  { name: "Unlimited Store Downloads", cheked: false },
                  { name: "3D assets", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="$19.99/mo"
                title="Standard"
                text="For novice Fanatic users who wish to dabble with new possibilities through the asset store."
                offers={[
                  { name: "Base Fanatic Program", cheked: true },
                  { name: "24/7 Support", cheked: true },
                  { name: "Animated Brushes", cheked: true },
                  { name: "Unlimited Store Downloads", cheked: true },
                  { name: "3D assets", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="$39.99/mo"
                title="Professional"
                text="For Professionals who wish to utilize the full extent of Fanatic's arsenal of functionality"
                offers={[
                  { name: "Base Fanatic Program", cheked: true },
                  { name: "24/7 Support", cheked: true },
                  { name: "Animated Brushes", cheked: true },
                  { name: "Unlimited Store Downloads", cheked: true },
                  { name: "3D assets", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




