export type DomainData = {
    id: string,
    name: string
} 

type CommonData = {
    id: number,
    value: number
}

export type DurationData = CommonData

export type TeamSizeData = CommonData

export type SkillLevelData = {
    id: number,
    value: string
}

export type ComplexityData = SkillLevelData