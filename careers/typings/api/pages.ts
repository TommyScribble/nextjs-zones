import { GuestContextObject } from '../../context/guestsSetup/types'
import {
    ArticleModel,
    BenefitBlocksModel,
    Component,
    FeatureCarouselModel,
    HeroModel,
    ImageAndTextModel,
    InfoBannerModel,
    InstagramFeedModel,
    QuoteModel,
    SideImageAndTextModel,
    TeamCarouselModel,
    TeamOverviewModel,
    TextCTAModel,
    UspModel,
    VacanciesTableModel,
    VacancyDetailsModel,
    VacancyHeroModel,
} from './components'

export interface Page {
    id: string
    type: string
    name: string
    url: string

    // Fields common to all page types
    pageTitle?: string
    pageTitleSuffix?: string
    metaDescription?: string
    buggyHireActivityBooker?: {}
}

export interface HomePage extends Page {
    hero?: HeroModel
    featureList?: FeatureCarouselModel
    imageAndText?: ImageAndTextModel
    featureCarousel?: FeatureCarouselModel
    quote?: QuoteModel
    sideImageAndText?: SideImageAndTextModel
    imageAndText2?: ImageAndTextModel
    instagramFeed?: InstagramFeedModel
}

export interface VacanciesPage extends Page {
    hero?: HeroModel
    vacanciesTable?: VacanciesTableModel
    imageAndText?: ImageAndTextModel
    textCta?: TextCTAModel
    components?: Component[]
}

export interface VacancyPage extends Page {
    vacancyHero?: VacancyHeroModel
    vacancyDetails?: VacancyDetailsModel
    quote?: QuoteModel
    uspAndBenefits?: UspModel
}

export interface NotFoundPage extends Page {
    hero?: HeroModel
}

export interface TeamsBreakdownPage extends Page {
    hero?: HeroModel
    sideImageAndText?: SideImageAndTextModel
    skills?: UspModel
    sideImageAndText2?: SideImageAndTextModel
    quote?: QuoteModel
    teamsCarousel?: TeamCarouselModel
    latestVacanciesTable?: VacanciesTableModel
    imageAndText?: ImageAndTextModel
}

export interface TeamOverviewPage extends Page {
    hero?: HeroModel
    teamGroups?: TeamOverviewModel[]
    components?: Component[]
}

export interface ValuesPage extends Page {
    hero?: HeroModel
    components?: Component[]
}

export interface BenefitsPage extends Page {
    hero?: HeroModel
    benefitsBlock?: BenefitBlocksModel
    components?: Component[]
}

export interface ArticleGenericPage extends Page {
    hero?: HeroModel
    article?: ArticleModel
    components?: Component[]
}

export interface DebugPage extends Page {
    hero?: HeroModel
}

export interface BlueLagoonPage extends Page {
    hero?: HeroModel
    intro?: TextCTAModel
    upcomingEvents?: FeatureCarouselModel
    supervisionPolicy?: BenefitBlocksModel
    faq?: BenefitBlocksModel
    newsletter?: TextCTAModel
    gettingHere?: SideImageAndTextModel
    infoBanner?: InfoBannerModel
}
