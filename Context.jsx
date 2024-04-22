import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Context = createContext({
  AllCards: [],
  Education: [],
  Bussiness: [],
  Marketing: [],
  HandleonChange: () => {},
  SetCardtoShow: [],
  ShownCard: [],
});

const ContextProvider = ({ children }) => {
  const Navigate = useNavigate();
  const [AllCards, SetCards] = useState([]);
  const [Education, setEducation] = useState([]);
  const [Marketing, setMarketing] = useState([]);
  const [Bussiness, setBussiness] = useState([]);

  // this is for set the dropdown value:
  const [intialDropDownValue, SetDropDownValue] = useState([]);

  useEffect(() => {
    const fetchData = async (keys, setState) => {
      // this is the personaAccessToken is valid from figma:
      const personalAccessToken =
        "figd__XAqR5tnNu_NCJgNPIhz500h-3KcNGyzdoiEGGiW";
      const newData = [];

      for (const key of keys) {
        const url = `https://api.figma.com/v1/files/${key.trim()}`;

        const response = await fetch(url, {
          headers: {
            "X-Figma-Token": personalAccessToken,
          },
        });
        const responseData = await response.json();

        if (responseData.err) {
          console.error("Error fetching data:", responseData.err);
          continue; // Skip to the next iteration if there's an error
        }
        // console.log(responseData);
        // Assuming responseData contains the thumbnailUrl property
        newData.push({ ...responseData, figmakey: key.trim() });
      }

      setState(newData);
    };

    const Educationkey = [
      "6TLoeUdpZfagdOI21NSPJg",
      "U4S2qiQGfe1T8CA9QY8H5W",
      "j4fGRbWemHL60BbIIXJpm8",
      "dlNCjpWXym3yeEW8PXuMa6",
      "LTaolHgvOv9fjFLPm7tdC7",
      "8Nc5i794hbRjElIyOpSOMz",
      "rUg3toFmICL9NlaDXy9fx5",
      "ROl7VnkWSJzTlbCU6IdAaQ",
      "FPZJGDRG6nHzaXOpBsZ9iJ",
      "UoOMCEk7Ur3IuZqoa8oX2Y",
      "V1nuArp5VIHONhPOZhjzU5",
      "SBc9muQfwU610iqXdsKxSw",
    ];
    fetchData(Educationkey, setEducation);

    const Marketingkey = [
      "qHKmjsP0hfpL72zDObMKx8",
      "Lx34EEK5NKXUR4vb67LrhZ",
      "PTL45xfg9L9UrH5domixSN",
      "D7K0ZgCu2xQRfPHQm11er7",
      "1Rig6FsUZYbDhPLvDprmHW",
      "hnDPiKSaQRRs1LbN9x9JOM",
      "SLBaa8tB1xwdDdpYN72Hx9",
      "F8KbUda9qUSPMoKgEayuC4",
      "giHV3e8oMw7I9a4BaHSMp5",
      "cVwDoiBdkkqwlRnJatfVTh",
      "bcDUm2dgckdQ6BbfYIcq6S",
      "fcV6hgSFi0MfchKH6f92CI",
    ];
    fetchData(Marketingkey, setMarketing);

    const Bussinesskey = [
      "oL1Gq8u9Y4FRQ3H5l1mMGi",
      "AFHtl0FE1ePS9sDPo0hPLm",
      "xTBcfUUyCBZftL4hiZvRo2",
      "SSQZ5IwILxzgpvAavQzlbZ",
      "fhr1EMVDNthHq2DOFjmZcB",
      "5f3jbv0w5EsklmT9Kz0Szm",
      "Y6BsXGA8H20TpxPxjhun0z",
      "gYnOy1gQhtdgkg01jG0rO6",
      "PzzpULlsNhgdgF3yYdeyMH",
      "WJqydokUsoAu8hLRVkkqkc",
      "elFC8pU0au9QaxsTCNuLGH",
      "rpre6Vlbb2gAKLXEwer6aG",
    ];
    fetchData(Bussinesskey, setBussiness);

    //
  }, []);

  useEffect(() => {
    const updatedAllCards = [...Education, ...Bussiness, ...Marketing];
    SetCards(updatedAllCards); // Triggered after Education is updated
  }, [Education, Bussiness, Marketing]);

  // this is all from the comp3des.jsx
  const [ShownCard, SetCardtoShow] = useState([]);

  const HandleonChange = (event) => {
    event.preventDefault();
    const category = event.target.value;
    // console.log("thchantalkdf ava", category);
    switch (category) {
      case "Education":
        Navigate("/Education");
        SetCardtoShow(Education);
        // history.push("/Education");
        break;
      case "Bussiness":
        SetCardtoShow(Bussiness);
        Navigate("/Bussiness");
        break;
      case "Marketing":
        SetCardtoShow(Marketing);
        Navigate("/Marketing");
        break;
      default:
        SetCardtoShow(AllCards);
        Navigate("/");
        // Navigate("/");
        break;
    }
  };
  // useEffect(() => {
  //   // Education = initialfigma;
  //   // console.log(Education);
  //   // SetCards(...Education);
  //   console.log("this sit ha;sdkl fj", Education);
  //   // console.log(initialfigma);
  // }, [Education]);
  return (
    <Context.Provider
      value={{
        Education,
        AllCards,
        Bussiness,
        Marketing,
        HandleonChange,
        SetCardtoShow,
        ShownCard,
        intialDropDownValue,
        SetDropDownValue,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
