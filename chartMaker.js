import { zingchart, ZC } from "zingchart/es6"; // to import the pareto chart module
import "zingchart/modules-es6/zingchart-pareto.min.js";
let myConfig = {
  type: "wordcloud",
  options: {
    minLength: 4,
    maxItems: 8,
    maxFontSize: 50,
    minFontSize: 10,
    ignore: ["with", "this"],
    text: `Pentagon reaffirms United States’ opposition to Poland’s offer to send fighter jets to Ukraine, saying transfer risks escalating crisis.
United Nations officials condemn bombing of children’s hospital in besieged Ukrainian city of Mariupol.
Ukraine has accused Russia of bombing the children’s hospital and maternity ward, injuring at least 17 people.
Russian Foreign Minister Sergey Lavrov arrives in Turkey for talks with Ukrainian counterpart.
Ukrainian President Volodymyr Zelenskyy reiterates call for Kyiv’s allies to impose a no-fly zone over the country.
US and United Kingdom again rule out no-fly zone, saying it could lead to direct confrontation with Russia.`,
  },
};

// Render Method[3]
zingchart.render({
  id: "myChart",
  data: myConfig,
});
