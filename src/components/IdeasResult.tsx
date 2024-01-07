import { useEffect, useState } from "react";
import { IdeasFormData } from "../pages/menu/Ideas";
import IdeasService from "../services/IdeasServices";

const IdeasResult = (props: IdeasFormData) => {
  const [ideas, setIdeas] = useState<string>();

  useEffect(() => {
    console.log()
    IdeasService.generateIdeas(props.data)
      .then((response: any) => {
        setIdeas(response.data)
      });
  }, []);

  return (
    <div>
      {ideas}
    </div>
  );
};

export default IdeasResult;
