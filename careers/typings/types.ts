import { Colors } from './utilities'
import { Page } from './api/pages'
import { FooterModel, MainMenuItem } from './api/components'
import { iconsList } from '../../components/atoms/Icon'
import { GuestContextObject } from '../context/guestsSetup/types'

export type PageData = {
    page: Page
    ancestorPages: PageRef[]
    siteSettings?: SiteSettings
    referencedContent: ReferencedContent
    loginState: LoginState
    queryString: any
    redirect?: string

    // Optional properties
    search: SearchDetails
    cookieData?: string
    guestSetupWizard: GuestContextObject
}

export type ReferencedContent = {
    [key: string]: any
}

export type PageRef = {
    id: string
    name: string
    url: string

    // Custom page ref fields
    listingImage?: ImageProps
    listingText?: string
}

export type LinkRef = {
    id?: string
    type?: string
    url?: string
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target']
    text?: string
}

export type ImageProps = {
    url: string
    width: number
    height: number
    alt: string
}

export type ContentRef = {
    id: string
    name: string
}

export type SiteSettings = {
    pageTitleSuffix: string
    logoName?: keyof typeof iconsList
    defaultMetaDescription: string
    mainMenuItems?: MainMenuItem[]
    defaultListingImage: ImageProps
    footer?: FooterModel
}

export type LoginState = {
    isLoggedIn: boolean
    emailAddress?: string
}

export type SearchDetails = {
    query: string
    results: PageRef[]
}

export type SiteMapItem = {
    name: string
    url: string
    children: SiteMapItem[]
}

export type Job = {
    title: string
    shortDescription: string
    applyUrl: string
    fileUrls: JobFileUrl[]
    page: PageRef
}

export type JobFileUrl = {
    url: string
    type: string
}

export type IconCommonProps = {
    color?: keyof typeof Colors
    width?: number
    height?: number
    className?: string
}
