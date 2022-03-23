import React from "react";
import { Layout } from "@components/Layout";
import { Button, SimpleGrid, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";

const Pages = () => {
  const form = useForm({ initialValues: { keyword: "" } });
  const handleSearch = ({keyword}) => {
    const query = keyword;
    window.open(
      "https://openbase.com/search?q=" + query,
      "_blank"
    );
  };
  return (
    <>
      <Layout>
        <form onSubmit={form.onSubmit((values) => handleSearch(values))}>
          <SimpleGrid>
            <Title order={4} className="text-white">
              Openbase Search Extension
            </Title>
            <TextInput
              placeholder="Keyword"
              {...form.getInputProps("keyword")}
            />
            <Button type="submit">Search</Button>
          </SimpleGrid>
        </form>
      </Layout>
    </>
  );
};

export default Pages;
