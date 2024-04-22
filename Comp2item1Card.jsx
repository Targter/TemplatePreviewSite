import styled from "styled-components";

const Comp2item1Card = () => {
  return (
    <>
      <Comp2item>
        <Comp2item1cont>
          <div
            className="underheading"
            style={{ width: "90%", fontSize: "1.3rem", fontWeight: "bold" }}
          >
            Create Powerful Development Workflows
          </div>
        </Comp2item1cont>
        <Comp2item1cont2>
          <div className="imgcontainer">
            <div className="plainbox">
              <img
                alt="Anima - Figma to Code: React, HTML, Vue, CSS, Tailwind"
                src="https://s3-alpha-sig.figma.com/plugins/857346721138427857/85446/07411a3dd898a71fa02e026d07a14d88878dd6c4-cover?Expires=1714348800&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=el75RH9-L7R8kAEaKGuDGIBXgnmjjWAU~ZAJhQztvzjgKRAZuSW2~Fy7R55ziMDYzw-WvJOmMykY3cg-TO9JJ9KiGoMEcXrBqckFPJXGsRi~zzyp48orNdbnM1F4syJSRhTLJyX9MivH2OA51UOIHc3M2jIXlYhVVTZMrC7nGkgPhuWeCFD0EDdzJJDInU5RWf-UIYDcs3nI~R5s~RaVBbviFCKybK9W3xkTmTEMPYPI7JXcv7chsr7eGxNlX7NAm30P7cNIFQl9YHl66ZfBCGMckoS-zv-L5uafjA971cQaDg7hP7cnRRaZw9lUOd2eYijIoou4AGiz42qRfAM3yg__"
                style={{ width: "100%", height: "100%", marginBottom: "10px" }}
              />
              <img
                alt="GitHub"
                src="https://s3-alpha-sig.figma.com/plugins/1220512233196109878/73352/4ae535d7861aab89604723fed2a444e728649737-cover?Expires=1714348800&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=mpsr-qV1d6TAqpRNu~x0l7SKSvovQVZx95O0pkN3x8eAiWRstP0w5zM2QAIVVYYeLfCglyxYsODdnUX4vsaVIhOvotXhYpIvddUe-1PNo8P4ujSmPOeotTCfh~2BT9h~GKIaKav1DonlmGYbsTe--QzNBXyxZruxHFNqLW7P1Nyr0GzEDJ2dryzO2wk-WhTiDzZAWRmwWPMd2k8-AtLxUbeHY3iqAL3Je7KQT5rWr196sMdinollmUJPizOCrHTQ63tN1WIW4LY4YeCrHv-CsjGOSZYe1bP9m8ExmnBlcaHRItpY7dUmGIsBd-vhxhHvF09xLpCnfJEzMyIzQbe5SA__"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="plainbox">
              <img
                alt="Storybook Connect"
                src="https://s3-alpha-sig.figma.com/plugins/1056265616080331589/76515/be1e4bb79d6993d5d38d5a510d53037036711d0c-cover?Expires=1714348800&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=DclAIjIoLYDeRBJ2~0jP9UZv8pvGEinlosA0WA9OeY-YVx19ZqEeeiqJr9XG5PV8p5CWyOf7yX6G1K3cn8bEuiAWlhcmMKfP-yMCgczos0whuHxQdwJ-vzupQgQWh-HqeCAdU3Gb9SC7P9wVfHDWE8x43mIe2uxwomV4DZ2dXZMH2jBW8xmT7YBUpuTapVmcXEMNP9M5tyUdy8cV-J4KB3-PAqAGAzy-UbMZHTm8iSjI5v9Od74Kc1FiB-3qKTdQTjMhvKSQDerpxRyzANZCSzxfwU9DeESikDRcoKjR9IJpiUCuwsAGSzWOLdiqiAhSHm0Hi6ZPkvfSZylVJs-nMw__"
                style={{ width: "100%", height: "100%", marginBottom: "10px" }}
              />{" "}
              <img
                alt="Linear"
                src="https://s3-alpha-sig.figma.com/plugins/1221187540287746170/76263/eb329869c2d8b67a29a8c276d157c385198a9f43-cover?Expires=1714348800&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=imyPgssXzoE51o6zyhhBZJg1ix4I2rOlBpNWCURa85sq2pNI1ZtJ~Jj3ZuCmYocox6nexBj7T~9xDnbaohNfoSt6mEUOcofqKWp02Qzf2wDjQaa6pgJaKE-9SPZKny5enl~fZRLOEQfyvaWAYDbayQW8713S86Wx3F7jYFlxEfGs4G6KHPVZgpgvZRJ5Vg9gnlwM7qy3-9s1jBJgONhiperEzfBE-gqJueClh0Tn8DOpECnTt5DehPG3SfmVJFjNIZC-dvOuhsBHWLVaK~QTbfIr4p70-id2lA09Bf2-UP3~MpX~SnyEcSds5JPeFMgfqHUqgSQPBh-tfkBUBXvXYQ__"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </Comp2item1cont2>
      </Comp2item>
    </>
  );
};

export default Comp2item1Card;

const Comp2item = styled.div`
  width: 600px;
  height: 200px;
  margin-left: 30px;
  background: linear-gradient(
    45deg,
    rgb(27, 196, 125),
    rgba(27, 196, 125, 0.5)
  );
  margin-right: 10px;
  display: flex;

  @media screen and (max-width: 920px) {
    width: 250px;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 20px;
  }
`;

const Comp2item1cont = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Comp2item1cont2 = styled.div`
  padding-left: 20px;
  width: 50%;
  height: 100%;
  overflow: hidden;
`;

// <img alt="Anima - Figma to Code: React, HTML, Vue, CSS, Tailwind" >
