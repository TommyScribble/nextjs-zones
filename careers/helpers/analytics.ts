export interface UaAnalyticsObject {
    eventCategory: string
    eventAction: string
    eventLabel: string
}

type Ga4AnalyticsObject = {
    category: string
    action: string
    label: string
    no_query_url: string
}

class Analytics {
    static trackAction(
        category: string,
        action: string,
        label: string,
        url: string,
        eventName?: string
    ) {
        if (process.env.STORYBOOK_ENVIRONMENT === 'storybook') {
            return
        }

        category = category.toLowerCase()
        action = action.toLowerCase()
        label = label.toLowerCase()
        url = url.toLowerCase().split(/[?#]/)[0]
        eventName = eventName?.toLowerCase()

        let uaObject: UaAnalyticsObject
        let ga4Obj: Ga4AnalyticsObject
        let name = eventName || 'component_interaction'

        ga4Obj = this.createGa4EventObj(category, action, label, url)
        uaObject = this.createUaEventObj(category, action, label)

        this.sendEvent(uaObject, ga4Obj, name)
    }

    static createUaEventObj(
        eventCategory: string,
        eventAction: string,
        eventLabel: string
    ) {
        return {
            eventCategory,
            eventAction,
            eventLabel,
        }
    }

    static createGa4EventObj(
        category: string,
        action: string,
        label: string,
        no_query_url: string
    ) {
        return {
            category,
            action,
            label,
            no_query_url,
        }
    }

    static sendEvent(
        uaEventOj: UaAnalyticsObject,
        ga4EventObj: Ga4AnalyticsObject,
        eventName: string
    ) {
        if (typeof ga == 'function') {
            ga('send', 'event', uaEventOj)
        }

        if (typeof gtag == 'function') {
            gtag('event', eventName, ga4EventObj)
        }
    }
}

export default Analytics
