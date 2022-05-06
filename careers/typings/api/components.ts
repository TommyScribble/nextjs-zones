import { iconsList } from '../../../components/atoms/Icon'

import { ImageProps, LinkRef } from '../types'
import {
    Ordering,
    SortableHeaders,
} from '../../components/organisms/VacanciesTable'

export interface Component {
    id?: string
    type?: string
}

export interface ImageModel extends Component {
    url?: string
    width?: number
    height?: number
    alt?: string
}

export interface Text extends Component {
    text?: string | string[]
    type?: string
}

export interface ArticleImage extends Component {
    image?: ImageModel
    type?: string
}

export interface ArticleCta extends Component {
    cta: LinkRef
    type?: string
}

export interface HeroModel extends Component {
    logo?: Pick<ImageProps, 'url' | 'alt'>
    title?: string
    subtitle?: string
    desktopImage?: Pick<ImageProps, 'url' | 'alt'>
    mobileImage?: Pick<ImageProps, 'url' | 'alt'>
    ctas?: LinkRef[]
}

export interface ImageAndTextModel extends Component {
    subject?: string
    title?: string
    body?: ParagraphModel[]
    mobileImage?: Pick<ImageProps, 'url' | 'alt'>
    desktopImage?: Pick<ImageProps, 'url' | 'alt'>
    mobileAlignment?: 'top' | 'bottom' | ''
    cta?: LinkRef
}

export interface ParagraphModel extends Component {
    paragraph?: string
}

export interface SideImageAndTextModel extends Component {
    subject?: string
    title?: string
    body?: ParagraphModel[]
    desktopImage?: Pick<ImageProps, 'url' | 'alt'>
    mobileImage?: Pick<ImageProps, 'url' | 'alt'>
    bulletPoints?: { iconName: keyof typeof iconsList; text: string }[]
    bulletPointLayout?: 'Two Columns' | 'One Column'
    iconName?: keyof typeof iconsList
    cta?: LinkRef
    imageLayout?: 'Left' | 'Right'
}

export interface QuoteModel extends Component {
    quote?: string
    name?: string
    profession?: string
    cta?: LinkRef
    desktopImage?: Pick<ImageProps, 'url' | 'alt'>
    mobileImage?: Pick<ImageProps, 'url' | 'alt'>
}

export interface FeatureCarouselModel extends Component {
    subject?: string
    title?: string
    body?: string
    cta?: LinkRef
    cards?: CarouselCardModel[]
}

export interface CarouselCardModel extends Component {
    title: string
    body: string
    link?: LinkRef
    image?: Pick<ImageModel, 'url' | 'alt'>
}

export interface FooterModel extends Component {
    jobAlertTitle?: string
    jobAlertBody?: string
    jobAlertCTA?: LinkRef
    primaryMenus?: FooterMenuItemModel[]
    secondaryLinks?: LinkRef[]
    logos?: ImageModel[]
}

export interface FooterMenuItemModel extends Component {
    title?: string
    links?: LinkRef[]
}

export interface LinksWithTitleModel extends Component {
    title?: string
    links?: LinkRef[]
}

export interface TextCTAModel extends Component {
    title?: string
    text?: string
    ctaTip?: string
    cta?: LinkRef
}

export type TVacancy = {
    jobTitle: string
    team: string
    isPromoted: boolean
    teamIcon: keyof typeof iconsList
    contractType: string
    rateOfPay: string
    closingDateFormatted: string
    closingDateTicks: number
    url: string
}

export interface VacanciesTableModel extends Component {
    title: string
    variations?: 'standard' | 'onlyLatest'
    defaultSortBy?: SortableHeaders
    defaultOrdering?: Ordering
    emptyListTitle: string
    emptyListText: string
    emptyListCta: LinkRef
    vacancies: TVacancy[]
    viewAllCta?: LinkRef
}

export interface VacancyDetailsModel extends Component {
    jobTitle?: string
    jobDescription?: string
    additionalJobDescription?: string
    applyUrl?: string
}

export interface VacancyHeroModel extends Component {
    jobTitle: string
    team: string
    teamIcon: keyof typeof iconsList
    rateOfPay: string
    contractType: string
    closingDateFormatted: string
    applyUrl: string
    jobDescriptionDownloadUrl: string
    applyCTAText: string
    downloadJobDescriptionCTAText: string
    desktopImage?: ImageModel
}

export type TBenefit = {
    iconName?: keyof typeof iconsList
    title?: string
    description?: string
    cta?: LinkRef
}

export interface UspModel extends Component {
    subject?: string
    title?: string
    body?: string
    cta?: LinkRef
    cards?: TBenefit[]
}

export interface InstagramFeedModel extends Component {
    subject?: string
    title?: string
    facebookLink?: LinkRef
    instagramLink?: LinkRef
    feed?: InstagramFeedItem[]
}

export interface InstagramFeedItem {
    id?: string
    altText?: string
    imageUrl?: string
    postLink?: string
}

export interface BenefitBlocksModel extends Component {
    subject?: string
    title?: string
    body?: string
    benefits?: TBenefit[]
}

export interface AcademyCardsModel extends Component {
    subject?: string
    title?: string
    body?: string
    cards?: {
        iconName?: keyof typeof iconsList
        title?: string
        body?: string
        cta?: LinkRef
    }[]
}

export interface TeamCarouselModel extends Component {
    title?: string
    body?: string
    cards?: CarouselCardModel[]
}

export interface TeamOverviewModel extends Component {
    subject?: string
    title?: string
    body?: string
    teams?: {
        teamName?: string
        image?: Pick<ImageProps, 'alt' | 'url'>
        link?: LinkRef
    }[]
}

export interface MainMenuItem extends Component {
    link?: LinkRef
}

export interface ArticleModel extends Component {
    title?: string
    body?: string
    components?: (ArticleCta | ParagraphModel | ArticleImage)[]
    ctas?: LinkRef[]
}

export interface InfoBannerModel extends Component {
    body?: string
}
