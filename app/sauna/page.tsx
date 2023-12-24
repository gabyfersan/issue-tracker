import { Flex, Grid, Text } from "@radix-ui/themes";

const bookinHours = [];

const getAllBookinHours = () => {
  const allBookinHours = [];

  for (let i = 1; i < 25; i++) {
    allBookinHours.push(i === 1 ? { label: "23 juni" } : {});
  }
  return allBookinHours;
};
const getAll = (addNumbersOfDays: number) => {
  //.toISOString().slice(0, 10);
  const dateNow = new Date();
  return dateNow.setDate(dateNow.getDate() + addNumbersOfDays);
};

const getAllHours = () => {
  const hours = [];
  const currentDate = new Date();
  currentDate.setHours(0);
  currentDate.setMinutes(0);

  for (let i = 1; i < 25; i++) {
    currentDate.setHours(currentDate.getHours() + 1);
    hours.push(currentDate.toISOString().slice(11, 16));
  }
  return hours;
};

let div = {
  height: "5em",
  width: "5em",
  border: "2px solid #ffa94d",
  "border-radius": "5px",
  "background-color": "#ffd8a8",
  color: "#d9480f",
  "text-align": "center",
  overflow: "clip",
};

let div2 = {
  height: "5em",
  width: "7em",
  border: "2px solid #ffa94d",
  "border-radius": "5px",
  "background-color": "green",
  color: "#d9480f",
  "text-align": "center",
  //"z-index": "-1",
};

let g = {
  "grid-template-columns":
    "1fr 1fr 1fr 1fr  1fr  1fr  1fr 1fr 1fr  1fr  1fr  1fr",
  //  "position": "fixed"
  //contain: "paint",
  height: "800px",
  width: "100%",
  "white-space": "nowrap",
  overflow: "auto",
};

const Sauna = () => {
  const allHours = getAllHours();
  console.log();
  return (
    <Grid style={g}>
      <Flex
        direction='column'
        // gap='0'
        className=' sticky left-0 z-10'
      >
        {allHours.map((a) => (
          <div
            key={a}
            style={div}
            className={`flex items-center justify-center sticky left-0`}
          >
            <Text size='6'>{a}</Text>
          </div>
        ))}
      </Flex>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((aa) => (
        <Flex direction='column' key={aa}>
          {getAllBookinHours().map((a) => (
            <div
              key={a.label}
              style={div2}
              className={`flex items-center justify-center 	${
                a.label ? " sticky top-0" : ""
              }`}
            >
              <Text size='6'>{a.label}</Text>
            </div>
          ))}
        </Flex>
      ))}
    </Grid>
  );
};

export default Sauna;
