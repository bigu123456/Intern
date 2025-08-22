import React from "react";
import { Table, Typography } from "antd";

const { Title } = Typography;


const columns = [
  {
    title: "DE",
    dataIndex: "de",
    key: "de",
    width: "10%",
  },
  {
    title: "Test",
    dataIndex: "test",
    key: "test",
    width: "70%",
  },
  {
    title: "No.",
    dataIndex: "no",
    key: "no",
    width: "20%",
  },
];

const data = [
  // ------------------- HAEMATOLOGY -------------------
  { key: 1, section: "HAEMATOLOGY", de: 1, test: "Hemoglobin (HB)", no: "01" },
  { key: 2, de: 2, test: "RBC Count", no: "02" },
  { key: 3, de: 3, test: "TLC (Total Leucocyte Count)", no: "03" },
  { key: 4, de: 4, test: "Platelet Count", no: "04" },
  { key: 5, de: 5, test: "Packed Cell Volume (PCV)", no: "05" },
  { key: 6, de: 6, test: "Mean Corpuscular Volume (MCV)", no: "06" },
  { key: 7, de: 7, test: "Mean Corpuscular Hemoglobin (MCH)", no: "07" },
  { key: 8, de: 8, test: "Mean Corpuscular Hemoglobin Concentration (MCHC)", no: "08" },
  { key: 9, de: 9, test: "Reticulocyte Count", no: "09" },
  { key: 10, de: 10, test: "Erythrocyte Sedimentation Rate (ESR)", no: "10" },

  // ------------------- IMMUNOLOGY -------------------
  { key: 11, section: "IMMUNOLOGY", de: 11, test: "Pregnancy Test (UPT)", no: "11" },
  { key: 12, de: 12, test: "ASO (Antistreptolysin O)", no: "12" },
  { key: 13, de: 13, test: "CRP (C-Reactive Protein)", no: "13" },
  { key: 14, de: 14, test: "RA Factor", no: "14" },
  { key: 15, de: 15, test: "ANA (Antinuclear Antibody)", no: "15" },
  { key: 16, de: 16, test: "HIV 1 & 2", no: "16" },
  { key: 17, de: 17, test: "HBsAg", no: "17" },
  { key: 18, de: 18, test: "HCV", no: "18" },
  { key: 19, de: 19, test: "Dengue NS1 Antigen", no: "19" },
  { key: 20, de: 20, test: "Dengue IgM/IgG", no: "20" },

  // ------------------- BIOCHEMISTRY -------------------
  { key: 21, section: "BIOCHEMISTRY", de: 21, test: "Blood Sugar (Fasting)", no: "21" },
  { key: 22, de: 22, test: "Blood Sugar (PP)", no: "22" },
  { key: 23, de: 23, test: "Blood Sugar (Random)", no: "23" },
  { key: 24, de: 24, test: "HbA1c", no: "24" },
  { key: 25, de: 25, test: "Urea", no: "25" },
  { key: 26, de: 26, test: "Creatinine", no: "26" },
  { key: 27, de: 27, test: "Uric Acid", no: "27" },
  { key: 28, de: 28, test: "Sodium", no: "28" },
  { key: 29, de: 29, test: "Potassium", no: "29" },
  { key: 30, de: 30, test: "Chloride", no: "30" },
  { key: 31, de: 31, test: "Calcium", no: "31" },
  { key: 32, de: 32, test: "Phosphorus", no: "32" },
  { key: 33, de: 33, test: "Total Protein", no: "33" },
  { key: 34, de: 34, test: "Albumin", no: "34" },
  { key: 35, de: 35, test: "Globulin", no: "35" },
  { key: 36, de: 36, test: "A/G Ratio", no: "36" },
  { key: 37, de: 37, test: "Bilirubin (Total)", no: "37" },
  { key: 38, de: 38, test: "Bilirubin (Direct)", no: "38" },
  { key: 39, de: 39, test: "SGOT (AST)", no: "39" },
  { key: 40, de: 40, test: "SGPT (ALT)", no: "40" },
  { key: 41, de: 41, test: "Alkaline Phosphatase", no: "41" },
  { key: 42, de: 42, test: "Gamma GT", no: "42" },
  { key: 43, de: 43, test: "Lactate Dehydrogenase (LDH)", no: "43" },
  { key: 44, de: 44, test: "Amylase", no: "44" },
  { key: 45, de: 45, test: "Lipase", no: "45" },
  { key: 46, de: 46, test: "Cholesterol (Total)", no: "46" },
  { key: 47, de: 47, test: "HDL Cholesterol", no: "47" },
  { key: 48, de: 48, test: "LDL Cholesterol", no: "48" },
  { key: 49, de: 49, test: "Triglycerides", no: "49" },
  { key: 50, de: 50, test: "VLDL", no: "50" },

  // ------------------- MICROBIOLOGY -------------------
  { key: 51, section: "MICROBIOLOGY", de: 51, test: "Blood Culture", no: "51" },
  { key: 52, de: 52, test: "Urine Culture", no: "52" },
  { key: 53, de: 53, test: "Sputum Culture", no: "53" },
  { key: 54, de: 54, test: "Throat Swab", no: "54" },
  { key: 55, de: 55, test: "Stool Culture", no: "55" },
  { key: 56, de: 56, test: "Widal Test", no: "56" },
  { key: 57, de: 57, test: "Mantoux Test", no: "57" },
  { key: 58, de: 58, test: "Gram Stain", no: "58" },
  { key: 59, de: 59, test: "AFB Stain", no: "59" },
  { key: 60, de: 60, test: "KOH Mount", no: "60" },

  // ------------------- HORMONES -------------------
  { key: 61, section: "HORMONES", de: 61, test: "TSH", no: "61" },
  { key: 62, de: 62, test: "T3", no: "62" },
  { key: 63, de: 63, test: "T4", no: "63" },
  { key: 64, de: 64, test: "Free T3", no: "64" },
  { key: 65, de: 65, test: "Free T4", no: "65" },
  { key: 66, de: 66, test: "Insulin (Fasting)", no: "66" },
  { key: 67, de: 67, test: "C-Peptide", no: "67" },
  { key: 68, de: 68, test: "Cortisol", no: "68" },
  { key: 69, de: 69, test: "Prolactin", no: "69" },
  { key: 70, de: 70, test: "LH", no: "70" },
  { key: 71, de: 71, test: "FSH", no: "71" },
  { key: 72, de: 72, test: "Testosterone", no: "72" },
  { key: 73, de: 73, test: "Estradiol (E2)", no: "73" },
  { key: 74, de: 74, test: "Progesterone", no: "74" },
  { key: 75, de: 75, test: "Vitamin D", no: "75" },
  { key: 76, de: 76, test: "Vitamin B12", no: "76" },

  // ------------------- URINE TESTS -------------------
  { key: 77, section: "URINE TESTS", de: 77, test: "Urine Routine & Microscopy", no: "77" },
  { key: 78, de: 78, test: "Urine Albumin", no: "78" },
  { key: 79, de: 79, test: "Urine Sugar", no: "79" },
  { key: 80, de: 80, test: "Urine Bile Salts", no: "80" },
  { key: 81, de: 81, test: "Urine Bile Pigments", no: "81" },
  { key: 82, de: 82, test: "Urine Ketone", no: "82" },
  { key: 83, de: 83, test: "Urine pH", no: "83" },
  { key: 84, de: 84, test: "Urine Specific Gravity", no: "84" },
  { key: 85, de: 85, test: "Urine Culture & Sensitivity", no: "85" },

  // ------------------- STOOL TESTS -------------------
  { key: 86, section: "STOOL TESTS", de: 86, test: "Stool Routine & Microscopy", no: "86" },
  { key: 87, de: 87, test: "Stool Occult Blood", no: "87" },
  { key: 88, de: 88, test: "Stool Ova & Parasite", no: "88" },
  { key: 89, de: 89, test: "Stool Reducing Substance", no: "89" },
  { key: 90, de: 90, test: "Stool Culture & Sensitivity", no: "90" },

  // ------------------- OTHERS -------------------
  { key: 91, section: "OTHERS", de: 91, test: "ECG", no: "91" },
  { key: 92, de: 92, test: "X-Ray Chest", no: "92" },
  { key: 93, de: 93, test: "Ultrasound Abdomen", no: "93" },
  { key: 94, de: 94, test: "Liver Function Test (LFT)", no: "94" },
  { key: 95, de: 95, test: "Kidney Function Test (KFT)", no: "95" },
  { key: 96, de: 96, test: "Lipid Profile", no: "96" },
  { key: 97, de: 97, test: "Thyroid Profile", no: "97" },
  { key: 98, de: 98, test: "Electrolyte Panel", no: "98" },
  { key: 99, de: 99, test: "Serum Iron", no: "99" },
  { key: 100, de: 100, test: "Ferritin", no: "100" },
  { key: 91, section: "OTHERS", de: 91, test: "ECG", no: "91" },
  { key: 92, de: 92, test: "X-Ray Chest", no: "92" },
  { key: 93, de: 93, test: "Ultrasound Abdomen", no: "93" },
  { key: 94, de: 94, test: "Liver Function Test (LFT)", no: "94" },
  { key: 95, de: 95, test: "Kidney Function Test (KFT)", no: "95" },
  { key: 96, de: 96, test: "Lipid Profile", no: "96" },
  { key: 97, de: 97, test: "Thyroid Profile", no: "97" },
  { key: 98, de: 98, test: "Electrolyte Panel", no: "98" },
  { key: 99, de: 99, test: "Serum Iron", no: "99" },
  { key: 100, de: 100, test: "Ferritin", no: "100" },
];


const LabTestTable = () => {
  return (
    <>
  
    <div  className="flex justify-center ">
      <Title level={4}>प्रयोगशाला सेवा (Laboratory Services)</Title>
       </div>


      <Table
        className="custom-table"
        columns={columns}
        dataSource={data}
        rowKey="key"
      />
        </>
   
  );
};

export default LabTestTable;
