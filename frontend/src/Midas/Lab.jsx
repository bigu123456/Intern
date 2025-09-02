import React from "react";
import { Table } from "antd";
import labDataJson from "./laboratory_services.json";
import "./Labstyle.css";

const testNames = [];
let nextDE = 1;


const formatTestStaggered = (item) => {
  const currentDE = nextDE++;

  const mainTest = item.Test;
  let deLines = [`${currentDE}`];
  let subTests = [];

  if (item.children && item.children.length > 0) {
    item.children.forEach((child) => {
      const { deLines: childDEs, testLines: childTests } = formatTestStaggered(child);
      deLines = deLines.concat(childDEs);
      subTests = subTests.concat(childTests);
    });
  }

  let testLines = mainTest;
  if (subTests.length > 0) {
    testLines += "\n" + subTests.join(" / ");
  }

  return { deLines, testLines };
};


labDataJson.forEach((categoryItem) => {
  
  testNames.push({ isCategory: true, test: categoryItem.Test, de: "" });

  categoryItem.children.forEach((test) => {
    const { deLines, testLines } = formatTestStaggered(test);
    testNames.push({
      isCategory: false,
      test: testLines,
      de: deLines.join("\n"),
    });
  });
});

// Split data equally across 7 tables
const totalTables = 7;
const totalRows = testNames.length;
const baseChunk = Math.floor(totalRows / totalTables);
const remainder = totalRows % totalTables;

const tablesData = [];
let start = 0;

for (let i = 0; i < totalTables; i++) {
  
  const end = start + baseChunk + (i < remainder ? 1 : 0);
  tablesData.push(
    testNames.slice(start, end).map((item, idx) => ({
      key: `${i}-${idx}`,
      ...item,
    }))
  );
  start = end;
}

const columns = [
  { 
    title: "DE", 
    dataIndex: "de", 
    key: "de", 
    width: 60, 
    className: "de-col",
    render: (text) => <span style={{ whiteSpace: "pre-line" }}>{text}</span>
  },
  { 
    title: "Test", 
    dataIndex: "test", 
    key: "test", 
    width: 400, 
    className: "test-col",
    render: (text) => {
      if (!text) return null;
      const lines = text.split("\n");
      if (lines.length === 1) return lines[0];
      return (
        <div>
          <div>{lines[0]}</div>
          <div style={{ borderLeft: "1px solid #000", paddingLeft: 5 }}>
            {lines.slice(1).map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </div>
        </div>
      );
    }
  },
  { title: "No.", dataIndex: "no", key: "no", width: 50, className: "no-col" },
];

const LabTables = () => (
  <div className="lab-tables-wrapper flex">
    <div className="lab-tables-container flex">
      {tablesData.map((data, index) => (
        <Table
          key={index}
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
          size="small"
          className="lab-table"
          rowClassName={(record) => (record.isCategory ? "category-row" : "")}
        />
      ))}
    </div>
  </div>
);


export default LabTables;
