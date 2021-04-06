const point3format = (number:number)=>{
  if(number !== null){
    return number.toFixed(3);
  }else{
    return null;
  }
}
const point2format = (number:number)=>{
  if(number !== null){
    return number.toFixed(2);
  }else{
    return null;
  }
}
const nameFormat = (row:any) => {
  return `<img height="15" src="https://cap-baseball.com/images/${row.teamId}.jpg"/>&nbsp;${row.name}`
}

export const columns = [
  {
    field: nameFormat,
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
    label: "安打",
    type: "number",
  },
  {
    field: "homerun",
    label: "HR",
    type: "number",
  },
  {
    field: "rbi",
    label: "打点",
    type: "number",
  },
  {
    field: "four_ball",
    label: "四球",
    type: "number",
  },
  {
    field: "strike_out",
    label: "三振",
    type: "number",
  },
  {
    field: "twobase",
    label: "二塁打",
    type: "number",
  },
  {
    field: "three_base",
    label: "三塁打",
    type: "number",
  },
  {
    field: "average",
    label: "打率",
    type: "number",
    formatFn: point3format
  },
  {
    field: "obp",
    label: "出塁率",
    type: "number",
    formatFn: point3format
  },
  {
    field: "slg",
    label: "長打率",
    type: "number",
    formatFn: point3format
  },
  {
    field: "ops",
    label: "OPS",
    type: "number",
    formatFn: point3format
  },
];

export const pColumns = [
  {
    field: nameFormat,
    label: "選手名",
    type: "string",
    html:true
  },
  {
    field: 'inning',
    label: "投球回",
    type: "number",
    formatFn: point2format
  },
  {
    field: 'hit',
    label: "被安打",
    type: "number",
  },
  {
    field: 'strike_out',
    label: "奪三振",
    type: "number",
  },
  {
    field: 'four_ball',
    label: "与四球",
    type: "number",
  },
  {
    field: 'runs',
    label: "自責点",
    type: "number",
  },
  {
    field: 'complete',
    label: "完投",
    type: "number",
  },
  {
    field: 'shutout',
    label: "完封",
    type: "number",
  },
  {
    field: 'win',
    label: "勝ち",
    type: "number",
  },
  {
    field: 'lose',
    label: "負け",
    type: "number",
  },
  {
    field: 'save',
    label: "S",
    type: "number",
  },
  {
    field: 'era',
    label: "防御率",
    type: "number",
    formatFn:point2format
  },
  {
    field: 'whip',
    label: "WHIP",
    type: "number",
    formatFn:point2format
  },
  {
    field: 'strike_avg',
    label: "奪三振率",
    type: "number",
    formatFn:point2format
  },
  {
    field: 'kbb',
    label: "K/BB",
    type: "number",
    formatFn:point2format
  },
]
