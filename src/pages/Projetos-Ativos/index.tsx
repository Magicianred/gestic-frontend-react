import * as React from "react";
import { Table, Tag, Space } from "antd";
import { Heading } from "@chakra-ui/react"
import styled from "styled-components"

const HeadingDiv = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
`

const TableDiv = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
`

// mocked columns
const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: text => <a>{text}</a>,
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? "geekblue" : "green";
                    if (tag === "loser") {
                        color = "volcano";
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: "Action",
        key: "action",
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

// mocked dataSource
const dataSource = [
    {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
    },
    {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
    },
    {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    },
];

const ProjetosAtivos = () => {
    return (
        <div>
            <HeadingDiv
            >
                <Heading color="teal">Projetos Ativos</Heading>
            </HeadingDiv>
            <TableDiv>
                <Table
                    style={{width: "80%"}}
                    columns={columns}
                    dataSource={dataSource}
                />
            </TableDiv>
        </div>
    )
}

export default ProjetosAtivos