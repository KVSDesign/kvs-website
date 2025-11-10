export type Project = {
    title: string,
    slug: string,
    category: string,
    tech: string,
    thumbnailUrl: string,
    logoUrl: string,
    shortDescription: string,
    description1: string,
    description2: string,
    techStacks: string[],
    lotties: {
        title: string,
        data: unknown,
    }[]
};