export type ResultModel = {
    averageTop10:[],
    battingResultList:[],
    eraTop10:[],
    hitTop10:[],
    homerunTop10:[],
    league:{
        name:string,
        id:number,
        league_id:number,
        begin_date:Date,
        end_date:Date
    },
    leagueList:[],
    nonTitle:[],
    pitchingResultList:[],
    rbiTop10:[],
    recentEditedGames:[],
    recentGames:[],
    regAtBats:number,
    regAtPitch:number,
    resultList:[],
    saveTop10:[],
    strikeOutTop10:[],
    winTop10:[]
}