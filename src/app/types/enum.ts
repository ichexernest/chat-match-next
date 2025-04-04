export enum Gender {
    Male = "male",
    Female = "female",
    Other = "other",
}

export enum Drinking {
    Always = "always",
    Sometimes = "sometimes",
    Never = "never",
}

export enum Smoking {
    Always = "always",
    Sometimes = "sometimes",
    Never = "never",
}

export enum Exercise {
    Always = "always",
    Sometimes = "sometimes",
    Never = "never",
}

export enum StarSign {
    Leo = "leo",
    Virgo = "virgo",
    Sagittarius = "sagittarius",
    Capricorn = "capricorn",
    Aquarius = "aquarius",
    Pisces = "pisces",
    Taurus = "taurus",
    Gemini = "gemini",
    Cancer = "cancer",
    Libra = "libra",
    Scorpio = "scorpio",
    Aries = "aries",
}

export enum MatchInteractionType {
    Like = "like",
    Dislike = "dislike",
    Superlike = "superlike",
    Block = "block",
    Turbo = "turbo",
}

export enum MatchStatus{
    Matched = "matched",
    Unmatched = "unmatched",
    Block = "block",
}

export enum KindredyType{
    Classic = "classic",
    Spark = "spark",
}

export enum MatchPhase{
    Prematch = "prematch", //剛配到
    Waiting = "waiting", //等待對方確認
    Prechat = "prechat", //限時聊天
    Match = "match", //成功
    Fail = "fail", //結束

}