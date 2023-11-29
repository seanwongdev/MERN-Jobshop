import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { clamp } from "framer-motion";

function Infographics({ data }) {
  const numApplicationsByStatus = data.reduce((acc, cur) => {
    Object.keys(cur).forEach((status) => {
      if (status !== "_id") acc[status] = (acc[status] || 0) + cur[status];
    });
    return acc;
  }, {});
  const total = Object.values(numApplicationsByStatus).reduce((acc, cur) => {
    acc = acc + cur;
    return acc;
  }, 0);

  const portalTotals = {};
  data.forEach((el) => {
    const portal = el._id;
    const total =
      el.Assessment +
      el.Applied +
      el.Shortlisted +
      el.Interview +
      el.Offer +
      el.Rejected;

    if (!portalTotals[portal]) {
      portalTotals[portal] = total;
    } else {
      portalTotals[portal] += total;
    }
  });
  const portalShortlist = {};
  data.forEach((el) => {
    const portal = el._id;
    const total =
      el.Assessment + el.Shortlisted + el.Interview + el.Offer + el.Rejected;

    if (!portalShortlist[portal]) {
      portalShortlist[portal] = total;
    } else {
      portalShortlist[portal] += total;
    }
  });
  const favouritePortalApplications =
    Object.entries(portalTotals).length === 0
      ? 0
      : Math.max(...Object.values(portalTotals));
  const favouritePortal = Object.keys(portalTotals).find(
    (key) => portalTotals[key] === favouritePortalApplications
  );

  const portalPercentage = {};

  Object.entries(portalTotals).forEach(([key, value]) => {
    const portal = key;
    const shortlist = portalShortlist[portal];
    const percentage = Number(((shortlist / value) * 100).toFixed(1));

    portalPercentage[portal] = percentage;
  });

  const maxPercentage =
    Object.entries(portalTotals).length === 0
      ? 0
      : Math.max(...Object.values(portalPercentage));
  const bestPortal = Object.keys(portalPercentage).find(
    (key) => portalPercentage[key] === maxPercentage
  );

  return (
    <SimpleGrid
      spacing={7}
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      <Card borderBottom="4px solid #DEF2F1">
        <CardHeader>
          <Heading size="md"> Total Applications </Heading>
          <Heading className="text-primary">{total}</Heading>
        </CardHeader>
        <CardBody>
          <Text>No. of job applications sent out</Text>
        </CardBody>
      </Card>
      <Card borderBottom="4px solid #DEF2F1">
        <CardHeader>
          <Heading size="md"> Assessments Completed</Heading>
          <Heading className="text-primary">
            {numApplicationsByStatus.Assessment || 0}
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>No. of Assessments Attempted</Text>
        </CardBody>
      </Card>
      <Card borderBottom="4px solid #DEF2F1">
        <CardHeader>
          <Heading size="md"> Offers Received </Heading>
          <Heading className="text-primary">
            {numApplicationsByStatus.Offer || 0}
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>No. of Job Offers</Text>
        </CardBody>
      </Card>
      <Card borderBottom="4px solid #17252A">
        <CardHeader>
          <Heading size="md"> Favourite Portal</Heading>
          <Heading className="text-primary">
            {favouritePortal || "None yet"}
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>
            {" "}
            <span className="font-bold text-xl">
              {favouritePortalApplications}
            </span>{" "}
            Applications Submitted Here
          </Text>
        </CardBody>
      </Card>
      <Card borderBottom="4px solid #17252A">
        <CardHeader>
          <Heading size="md"> Best Conversions</Heading>
          <Heading className="text-primary">{bestPortal || "None yet"}</Heading>
        </CardHeader>
        <CardBody>
          <Text>
            <span className="font-bold text-xl">{maxPercentage}%</span> of
            Applications Shortlisted
          </Text>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
}

export default Infographics;
