import React, {useEffect} from "react";
import {Content, Link} from "./styled";
import {Loader} from "components/Loader";
import {AddAppForm} from "components/AddAppForm";
import {func, bool} from "prop-types";
import {useRequest} from "hooks/useRequest";
import {getData} from "api";
import {TopAppsByHostForm} from "components/TopAppsByHostForm";
import {RemoveAppForm} from "components/RemoveAppForm";

const Home = ({onSaveInitialData, hasInitialData}) => {
  const {data, isLoading, error} = useRequest(getData);

  useEffect(() => {
    if (!hasInitialData && data) onSaveInitialData({data});
  }, [data]);

  if (isLoading || !data) {
    return <Loader/>;
  }

  if (error) {
    return <div>Sorry, something went wrong</div>;
  }

  return (
    <Content>
      <Link to={"/AppsByHost"}>See List of Apps By Host</Link>
      <TopAppsByHostForm/>
      <AddAppForm/>
      <RemoveAppForm/>
    </Content>
  );
};

Home.propTypes = {
  onSaveInitialData: func.isRequired,
  hasInitialData: bool.isRequired
};

export {Home};
