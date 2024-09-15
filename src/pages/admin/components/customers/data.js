import { Checkbox, Select } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';


export const dataSource = [
  {
    key: "1",
    checkbox: <Checkbox />,
    name: "Mike Dean",
    age: 32,
    email: "user1@gmail.com",
    status: <CheckCircleOutlined style={{ color: 'blue' }}/> ,
    createdAt: new Date(),
  },
  {
    key: "2",
    checkbox: <Checkbox />,
    name: "John Doe",
    age: 25,
    email: "user2@gmail.com",
    status: <ClockCircleOutlined style={{ color: 'orange' }} />,
    createdAt: new Date(),
  },
  {
    key: "3",
    checkbox: <Checkbox />,
    name: "Jane Smith",
    age: 30,
    email: "user3@gmail.com",
    status: <CheckCircleOutlined style={{ color: 'blue' }}/>,
    createdAt: new Date(),
  },
  {
    key: "4",
    checkbox: <Checkbox />,
    name: "Mike Dean",
    age: 32,
    email: "user1@gmail.com",
    status: <CheckCircleOutlined style={{ color: 'blue' }}/>,
    createdAt: new Date(),
  },
  {
    key: "5",
    checkbox: <Checkbox />,
    name: "John Doe",
    age: 25,
    email: "user2@gmail.com",
    status: <ClockCircleOutlined style={{ color: 'orange' }} />,
    createdAt: new Date(),
  },
  {
    key: "6",
    checkbox: <Checkbox />,
    name: "Jane Smith",
    age: 30,
    email: "user3@gmail.com",
    status: <CheckCircleOutlined style={{ color: 'blue' }}/>,
    createdAt: new Date(),
  },
  {
    key: "7",
    checkbox: <Checkbox />,
    name: "Mike Dean",
    age: 32,
    email: "user1@gmail.com",
    status: <CheckCircleOutlined style={{ color: 'blue' }}/>,
    createdAt: new Date(),
  },
  {
    key: "8",
    checkbox: <Checkbox />,
    name: "John Doe",
    age: 25,
    email: "user2@gmail.com",
    status: <ClockCircleOutlined style={{ color: 'orange' }} />,
    createdAt: new Date(),
  },
  {
    key: "9",
    checkbox: <Checkbox />,
    name: "Jane Smith",
    age: 30,
    email: "user3@gmail.com",
    status: <CheckCircleOutlined style={{ color: 'blue' }}/>,
    createdAt: new Date(),
  },
  {
    key: "10",
    checkbox: <Checkbox />,
    name: "Mike Dean",
    age: 32,
    email: "user1@gmail.com",
    status: <CheckCircleOutlined style={{ color: 'blue' }}/>,
    createdAt: new Date(),
  },
  {
    key: "11",
    checkbox: <Checkbox />,
    name: "John Doe",
    age: 25,
    email: "user2@gmail.com",
    status: <ClockCircleOutlined style={{ color: 'orange' }} />,
    createdAt: new Date(),
  },
  {
    key: "12",
    checkbox: <Checkbox />,
    name: "Jane Smith",
    age: 30,
    email: "user3@gmail.com",
    status: <CheckCircleOutlined style={{ color: 'blue' }}/>,
    createdAt: new Date(),
  },
  {
    key: "13",
    checkbox: <Checkbox />,
    name: "Mike Dean",
    age: 32,
    email: "user1@gmail.com",
    status: <CheckCircleOutlined style={{ color: 'blue' }}/>,
    createdAt: new Date(),
  },
  {
    key: "14",
    checkbox: <Checkbox />,
    name: "John Doe",
    age: 25,
    email: "user2@gmail.com",
    status: <ClockCircleOutlined style={{ color: 'orange' }} />,
    createdAt: new Date(),
  },
  {
    key: "15",
    checkbox: <Checkbox />,
    name: "Jane Smith",
    age: 30,
    email: "user3@gmail.com",
    status: <CheckCircleOutlined style={{ color: 'blue' }}/>,
    createdAt: new Date(),
  },
];

export const columns = [
  {
    title: "Select",
    dataIndex: "checkbox",
    width: 50,
  },
  {
    title: "Full Name",
    dataIndex: "name", 
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Verification Status",
    dataIndex: "status",
    filters: [
      { text: <CheckCircleOutlined style={{ color: 'blue' }}/>, value: <CheckCircleOutlined style={{ color: 'blue' }}/> },
      { text: <ClockCircleOutlined style={{ color: 'orange' }} />, value: <ClockCircleOutlined style={{ color: 'orange' }} /> },
    ],
    filterDropdown: (onSelect) => (
      <Select
        onChange={onSelect}
        allowClear
        options={[
          { label: "Active", value: "Active" },
          { label: <ClockCircleOutlined style={{ color: 'orange' }} />, value: <ClockCircleOutlined style={{ color: 'orange' }} /> },
        ]}
      />
    ),
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    render: (date) => date.toLocaleDateString(),
  },
];
