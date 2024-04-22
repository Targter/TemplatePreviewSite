import { useState } from "react";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import Footer from "./Footer";

const Publish = () => {
  const [droppedFiles, setDroppedFiles] = useState([]);

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);

    handleFileDrop(files);
  };

  //
  // Handle file drop
  const handleFileDrop = (files) => {
    setDroppedFiles(files);
    console.log("this is droopped file", droppedFiles);
  };
  const handleDragOver = (e) => {
    console.log(e);
    e.preventDefault();
  };

  // Handle file drop event
  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const updatedFiles = [...droppedFiles, ...files]; // Concatenate new files with existing files
    handleFileDrop(updatedFiles);
  };
  return (
    <>
      <div class="container py-4">
        <header class="pb-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center text-body-emphasis text-decoration-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="32"
              class="me-2"
              viewBox="0 0 118 94"
              role="img"
            >
              <title>Bootstrap</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                fill="currentColor"
              ></path>
            </svg>
            <span class="fs-4">Publish </span>
          </a>
        </header>

        <div class=" mb-4 bg-body-tertiary rounded-3">
          <div
            class="container d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: "#cfe2ff",
              color: "white",
              height: "162px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <svg
              width="644"
              height="366"
              viewBox="0 0 844 366"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                top: "-100px",
                left: "-300px",
                transform: "rotate(90deg)",
              }}
            >
              <line
                x1="35.2456"
                y1="139.013"
                x2="35.2456"
                y2="319.94"
                stroke="#FF8577"
                stroke-width="2"
              ></line>
              <line
                x1="113.179"
                y1="139.013"
                x2="113.179"
                y2="319.94"
                stroke="#FF8577"
                stroke-width="2"
              ></line>
              <line
                x1="191.112"
                y1="139.013"
                x2="191.112"
                y2="319.94"
                stroke="#FF8577"
                stroke-width="2"
              ></line>
              <line
                x1="269.045"
                y1="139.013"
                x2="269.045"
                y2="319.94"
                stroke="#FF8577"
                stroke-width="2"
              ></line>
              <line
                x1="346.979"
                y1="139.013"
                x2="346.979"
                y2="319.94"
                stroke="#FF8577"
                stroke-width="2"
              ></line>
              <line
                x1="424.913"
                y1="139.013"
                x2="424.913"
                y2="319.94"
                stroke="#FF8577"
                stroke-width="2"
              ></line>
              <line
                x1="502.845"
                y1="139.013"
                x2="502.845"
                y2="319.94"
                stroke="#FF8577"
                stroke-width="2"
              ></line>
              <line
                x1="580.779"
                y1="139.013"
                x2="580.779"
                y2="319.94"
                stroke="#FF8577"
                stroke-width="2"
              ></line>
              <line
                x1="623"
                y1="191.511"
                x2="7.02628e-08"
                y2="191.511"
                stroke="#FF8577"
                stroke-width="2"
              ></line>
              <line
                x1="623"
                y1="269.444"
                x2="7.02628e-08"
                y2="269.444"
                stroke="#FF8577"
                stroke-width="2"
              ></line>
              <path
                d="M65.4941 327.517C113.327 378.566 230.289 316.421 315.476 231.234C421.959 124.751 572.474 -19.274 534.232 119.137C495.989 257.548 534.214 269.718 572.65 250.706C642.363 216.225 829.282 85.5026 823.317 2"
                stroke="#699BF7"
                stroke-width="40"
              ></path>
              <path
                d="M65.4941 327.517C113.327 378.566 230.289 316.421 315.476 231.234C421.959 124.751 572.474 -19.274 534.232 119.137C495.989 257.548 534.214 269.718 572.65 250.706C642.363 216.225 829.282 85.5026 823.317 2"
                stroke="black"
                stroke-width="4"
              ></path>
              <path
                d="M574.755 42.7954L476.867 227.568"
                stroke="black"
                stroke-width="4"
              ></path>
              <circle
                cx="532.653"
                cy="119.466"
                r="5.26277"
                fill="white"
                stroke="black"
                stroke-width="4"
              ></circle>
              <circle
                cx="529.495"
                cy="64.0318"
                r="5.26277"
                fill="white"
                stroke="black"
                stroke-width="4"
              ></circle>
              <path
                d="M564.832 273.997L509.497 244.032"
                stroke="black"
                stroke-width="4"
              ></path>
              <path
                d="M384.243 135.254L247.411 325.065"
                stroke="black"
                stroke-width="4"
              ></path>
              <circle
                cx="315.827"
                cy="230.336"
                r="5.26277"
                fill="white"
                stroke="black"
                stroke-width="4"
              ></circle>
              <circle
                cx="536.863"
                cy="259.105"
                r="5.26277"
                fill="white"
                stroke="black"
                stroke-width="4"
              ></circle>
              <circle
                cx="68.4764"
                cy="185.777"
                r="5.26277"
                fill="white"
                stroke="black"
                stroke-width="4"
              ></circle>
              <path
                d="M73.3884 191.04L144.962 277.7"
                stroke="black"
                stroke-width="4"
              ></path>
              <rect
                x="380.033"
                y="130.343"
                width="9.47299"
                height="9.47299"
                fill="white"
                stroke="black"
                stroke-width="4"
              ></rect>
              <rect
                x="240.394"
                y="325.065"
                width="9.47299"
                height="9.47299"
                fill="white"
                stroke="black"
                stroke-width="4"
              ></rect>
              <rect
                x="503.181"
                y="236.3"
                width="9.47299"
                height="9.47299"
                fill="white"
                stroke="black"
                stroke-width="4"
              ></rect>
              <rect
                x="564.229"
                y="273.49"
                width="9.47299"
                height="9.47299"
                fill="white"
                stroke="black"
                stroke-width="4"
              ></rect>
              <rect
                x="472.306"
                y="225.073"
                width="9.47299"
                height="9.47299"
                fill="white"
                stroke="black"
                stroke-width="4"
              ></rect>
              <rect
                x="571.597"
                y="38.0688"
                width="9.47299"
                height="9.47299"
                fill="white"
                stroke="black"
                stroke-width="4"
              ></rect>
              <rect
                x="144.962"
                y="277.7"
                width="9.47299"
                height="9.47299"
                fill="white"
                stroke="black"
                stroke-width="4"
              ></rect>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M357.264 258.676L321.34 237.448L329.55 280.141L338.147 261.661L357.264 258.676Z"
                fill="#FF8577"
                stroke="black"
                stroke-width="4"
                stroke-linecap="square"
              ></path>
            </svg>
            <div
              className="publishitemhere"
              style={{ fontSize: "40px", color: "black" }}
            >
              Publish Your Content here
            </div>
            <svg
              width="442"
              height="328"
              viewBox="0 0 672 328"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                top: "-100px",
                right: "-150px",
                transform: "rotate(-90deg)",
              }}
            >
              <line
                x1="93.0057"
                y1="71.0366"
                x2="93.0057"
                y2="251.963"
                stroke="#FF8577"
                stroke-width="2"
              ></line>
              <line
                x1="170.939"
                y1="71.0366"
                x2="170.939"
                y2="251.963"
                stroke="#FF8577"
                stroke-width="2"
              ></line>
              <line
                x1="248.872"
                y1="71.0366"
                x2="248.872"
                y2="251.963"
                stroke="#FF8577"
                stroke-width="2"
              ></line>
              <line
                x1="326.806"
                y1="71.0366"
                x2="326.806"
                y2="251.963"
                stroke="#FF8577"
                stroke-width="2"
              ></line>
              <line
                x1="404.739"
                y1="71.0366"
                x2="404.739"
                y2="251.963"
                stroke="#FF8577"
                stroke-width="2"
              ></line>
              <line
                x1="482.673"
                y1="71.0366"
                x2="482.673"
                y2="251.963"
                stroke="#FF8577"
                stroke-width="2"
              ></line>
              <line
                x1="560.605"
                y1="71.0366"
                x2="560.605"
                y2="251.963"
                stroke="#FF8577"
                stroke-width="2"
              ></line>
              <line
                x1="638.539"
                y1="71.0366"
                x2="638.539"
                y2="251.963"
                stroke="#FF8577"
                stroke-width="2"
              ></line>
              <line
                x1="671.786"
                y1="123.534"
                x2="57"
                y2="123.534"
                stroke="#FF8577"
                stroke-width="2"
              ></line>
              <line
                x1="671.786"
                y1="201.467"
                x2="57"
                y2="201.467"
                stroke="#FF8577"
                stroke-width="2"
              ></line>
              <path
                d="M58.2804 22.7119L61.298 25.3185C69.9321 32.7766 82.5891 33.3689 91.8903 26.7502L95.141 24.4369L96.0406 28.3084C98.6146 39.3855 108.504 47.258 119.944 47.3364L123.942 47.3638L122.38 51.0213C117.91 61.4864 121.255 73.632 130.463 80.3775L133.681 82.7351L130.254 84.7817C120.449 90.6375 115.971 102.417 119.431 113.253L120.64 117.04L116.657 116.694C105.26 115.704 94.6704 122.618 91.0604 133.406L89.7987 137.176L86.781 134.569C78.1469 127.111 65.49 126.519 56.1888 133.138L52.938 135.451L52.0384 131.58C49.4645 120.502 39.5751 112.63 28.1355 112.552L24.1374 112.524L25.6995 108.867C30.1689 98.4015 26.8245 86.256 17.6161 79.5104L14.3977 77.1528L17.8248 75.1062C27.6304 69.2505 32.1084 57.471 28.6484 46.6348L27.4392 42.8476L31.4222 43.1937C42.8186 44.184 53.4086 37.27 57.0187 26.4822L58.2804 22.7119Z"
                fill="black"
              ></path>
              <line
                x1="141.187"
                y1="3.2513"
                x2="141.187"
                y2="147.72"
                stroke="black"
                stroke-width="4.00748"
                stroke-linecap="square"
              ></line>
              <line
                x1="146.075"
                y1="143.187"
                x2="2.00378"
                y2="143.187"
                stroke="black"
                stroke-width="4.00748"
                stroke-linecap="square"
              ></line>
              <line
                x1="6.01119"
                y1="2.00374"
                x2="6.01119"
                y2="147.72"
                stroke="black"
                stroke-width="4.00748"
                stroke-linecap="square"
              ></line>
              <line
                x1="148.078"
                y1="6.01106"
                x2="4.57764e-05"
                y2="6.01106"
                stroke="black"
                stroke-width="4.00748"
              ></line>
              <rect
                x="137.18"
                y="2.00374"
                width="8.81645"
                height="8.81645"
                fill="white"
                stroke="black"
                stroke-width="4.00748"
                stroke-linecap="square"
              ></rect>
              <rect
                x="137.18"
                y="139.18"
                width="8.81645"
                height="8.81645"
                fill="white"
                stroke="black"
                stroke-width="4.00748"
                stroke-linecap="square"
              ></rect>
              <rect
                x="2.00374"
                y="2.00374"
                width="8.81645"
                height="8.81645"
                fill="white"
                stroke="black"
                stroke-width="4.00748"
                stroke-linecap="square"
              ></rect>
              <rect
                x="2.00374"
                y="139.18"
                width="8.81645"
                height="8.81645"
                fill="white"
                stroke="black"
                stroke-width="4.00748"
                stroke-linecap="square"
              ></rect>
              <line
                x1="542.577"
                y1="121.081"
                x2="542.577"
                y2="325.085"
                stroke="black"
                stroke-width="4.00748"
                stroke-linecap="square"
              ></line>
              <line
                x1="547.841"
                y1="320.516"
                x2="344.394"
                y2="320.516"
                stroke="black"
                stroke-width="4.00748"
                stroke-linecap="square"
              ></line>
              <line
                x1="348.401"
                y1="119.333"
                x2="348.401"
                y2="325.085"
                stroke="black"
                stroke-width="4.00748"
                stroke-linecap="square"
              ></line>
              <line
                x1="549.845"
                y1="123.34"
                x2="342.39"
                y2="123.34"
                stroke="black"
                stroke-width="4.00748"
              ></line>
              <rect
                x="538.57"
                y="119.333"
                width="8.81645"
                height="8.81645"
                fill="white"
                stroke="black"
                stroke-width="4.00748"
                stroke-linecap="square"
              ></rect>
              <rect
                x="538.57"
                y="316.509"
                width="8.81645"
                height="8.81645"
                fill="white"
                stroke="black"
                stroke-width="4.00748"
                stroke-linecap="square"
              ></rect>
              <rect
                x="344.394"
                y="119.333"
                width="8.81645"
                height="8.81645"
                fill="white"
                stroke="black"
                stroke-width="4.00748"
                stroke-linecap="square"
              ></rect>
              <rect
                x="344.394"
                y="316.509"
                width="8.81645"
                height="8.81645"
                fill="white"
                stroke="black"
                stroke-width="4.00748"
                stroke-linecap="square"
              ></rect>
              <path
                d="M446.118 146.843L494.54 164.468L520.306 209.094L511.357 259.841L471.883 292.964H420.353L380.878 259.841L371.93 209.094L397.695 164.468L446.118 146.843Z"
                fill="#FF8577"
                stroke="black"
                stroke-width="4"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M177.183 146.845C177.183 152.244 179.645 157.068 183.507 160.256C184.791 161.315 184.791 163.618 183.507 164.678C179.645 167.865 177.183 172.689 177.183 178.088C177.183 187.686 184.963 195.467 194.561 195.467C199.96 195.467 204.784 193.005 207.972 189.142C209.031 187.859 211.334 187.859 212.394 189.142C215.581 193.005 220.405 195.467 225.804 195.467C235.402 195.467 243.183 187.686 243.183 178.088C243.183 172.689 240.721 167.865 236.858 164.678C235.575 163.618 235.575 161.315 236.858 160.256C240.721 157.068 243.183 152.244 243.183 146.845C243.183 137.248 235.402 129.467 225.804 129.467C220.405 129.467 215.581 131.929 212.394 135.791C211.334 137.075 209.031 137.075 207.972 135.791C204.784 131.929 199.96 129.467 194.561 129.467C184.963 129.467 177.183 137.248 177.183 146.845Z"
                fill="#A259FF"
              ></path>
              <path
                d="M236.858 164.677C240.721 167.865 243.183 172.689 243.183 178.088C243.183 187.686 235.402 195.466 225.804 195.466C220.405 195.466 215.581 193.004 212.394 189.142C211.334 187.858 209.031 187.858 207.972 189.142C204.784 193.004 199.96 195.466 194.561 195.466C184.963 195.466 177.183 187.686 177.183 178.088C177.183 172.689 179.645 167.865 183.507 164.677C184.791 163.618 184.791 161.315 183.507 160.255C179.645 157.068 177.183 152.244 177.183 146.845C177.183 137.247 184.963 129.466 194.561 129.466C199.96 129.466 204.784 131.928 207.972 135.791C209.031 137.074 211.334 137.074 212.394 135.791"
                stroke="black"
                stroke-width="4"
              ></path>
              <circle
                r="5.26277"
                transform="matrix(-1 0 0 1 237.92 161.337)"
                fill="white"
                stroke="black"
                stroke-width="4"
              ></circle>
              <circle
                r="5.26277"
                transform="matrix(-1 0 0 1 185.894 161.337)"
                fill="white"
                stroke="black"
                stroke-width="4"
              ></circle>
              <circle
                r="5.26277"
                transform="matrix(-1 0 0 1 185.894 161.338)"
                fill="white"
                stroke="black"
                stroke-width="4"
              ></circle>
              <circle
                r="5.26277"
                transform="matrix(-1 0 0 1 210.183 189.335)"
                fill="white"
                stroke="black"
                stroke-width="4"
              ></circle>
              <circle
                r="5.26277"
                transform="matrix(-1 0 0 1 210.183 137.176)"
                fill="white"
                stroke="black"
                stroke-width="4"
              ></circle>
              <path
                d="M261.062 199.952C262.617 207.497 269.297 213.17 277.303 213.17C279.119 213.17 280.867 212.878 282.502 212.339L290.202 220.039L300.862 209.379L293.107 201.624C293.613 200.036 293.886 198.344 293.886 196.587C293.886 188.871 288.615 182.385 281.478 180.534L253.183 172.467L261.062 199.952Z"
                fill="white"
              ></path>
              <path
                d="M253.183 172.467L281.478 180.534C288.615 182.385 293.886 188.871 293.886 196.587C293.886 198.344 293.613 200.036 293.107 201.624L300.862 209.379L290.202 220.039L282.502 212.339C280.867 212.878 279.119 213.17 277.303 213.17C269.297 213.17 262.617 207.497 261.062 199.952L253.183 172.467ZM253.183 172.467L277.232 196.516"
                stroke="#010101"
                stroke-width="4.37696"
              ></path>
              <path
                d="M280.18 199.883C278.414 201.65 275.55 201.65 273.784 199.883C272.018 198.117 272.018 195.254 273.784 193.488C275.55 191.721 278.414 191.721 280.18 193.488C281.946 195.254 281.946 198.117 280.18 199.883Z"
                fill="#010101"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M104.658 157.595L68.7344 136.367L76.9446 179.06L85.5417 160.58L104.658 157.595Z"
                fill="#699BF7"
                stroke="#010101"
                stroke-width="4"
                stroke-linecap="square"
              ></path>
            </svg>
          </div>
        </div>

        <div class="row align-items-md-stretch">
          <div class="col-md-6">
            <div class="h-100 p-5 text-bg-dark rounded-3 d-flex flex-column justify-content-center">
              <h2>Drag and dropcontainer</h2>

              <div
                style={{
                  width: "500px",
                  height: "auto",
                }}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {/* <h1>thgis is the drop container</h1> */}
                {droppedFiles.length > 0 ? (
                  <div>
                    <p>Files you dropped:</p>
                    <ul>
                      {droppedFiles.map((file, index) => (
                        <li key={index} style={{ listStyle: "none" }}>
                          {file.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p>Drop files here or click to upload</p>
                )}
              </div>

              {/*  */}
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileInputChange}
                multiple
              />
              {/* Button to trigger file input */}
              <button
                onClick={() => document.getElementById("fileInput").click()}
              >
                Browse Gallery
              </button>
            </div>
            {/* Input for selecting files from gallery */}
          </div>

          {/*  */}
          <div class="col-md-6">
            <div class="h-100 p-5 bg-body-info border rounded-3 text-white">
              <p style={{ fontSize: "2rem" }}>Publish Your file </p>
              <button
                class="btn btn-info"
                type="button"
                style={{ backgroundColor: "#cfe2ff" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Publish;
