const point3format = (number:number)=>{
  if(!isNaN(number)){
    return number.toFixed(3);
  }else{
    return null;
  }
}
const point2format = (number:number)=>{
  if(!isNaN(number)){
    return number.toFixed(2);
  }else{
    return null;
  }
}

export const columns = [
  {
    field: "name",
    label: "選手名",
    type: "string",
    html:true
  },
  {
    field: "tpa",
    label: "打席数",
    type: "number",
  },
  {
    field: "at_bats",
    label: "打数",
    type: "number",
  },
  {
    field: "hit",
    label: "安打数",
    type: "number",
  },
  {
    field: "rbi",
    label: "打点",
    type: "number",
  },
  {
    field: "average",
    label: "打率",
    type: "number",
    formatFn: point3format
  },
];
