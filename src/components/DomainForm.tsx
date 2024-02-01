import { Card, CardHeader, Heading, Stack } from "@chakra-ui/react";
import "../index.css";
import { useEffect, useState } from "react";
import { DomainData } from "../types/Ideas";
import DomainService from "../services/DomainService";
import { IdeasFormData } from "../pages/ideas/Ideas";

const DomainForm = (props : IdeasFormData) => {
  const [domains, setDomains] = useState<DomainData[]>([]);

  useEffect(() => {
    DomainService.getAllDomains().then((response: any) => {
      setDomains(response.data);
    });
  }, []);

  const updateSelectedDomain = (id: string) => {
    if (props?.data.domainId !== id) {
      props.updateForm("domainId" ,id);
    }
  };

  return (
    <>
      <Stack mt={30}>
        <Heading as="h3" size="xl">
          Select the domain for your project idea
        </Heading>
        <Stack
          direction={"row"}
          marginTop={30}
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          {domains.map((domain) => {
            return (
              <div className="domain-card">
                <Card
                  key={domain.id}
                  size={"lg"}
                  onClick={() => updateSelectedDomain(domain.id)}
                  variant={props.data.domainId && props.data.domainId === domain.id ? "filled" : "outline"}
                >
                  <CardHeader>
                    <Heading size="sm"> {domain.name}</Heading>
                  </CardHeader>
                </Card>
              </div>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
};

export default DomainForm;
