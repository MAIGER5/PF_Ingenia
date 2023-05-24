export const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";

export default function setActiveTab (activeTab) {
    return {
        type: SET_ACTIVE_TAB,
        payload: activeTab
    }
}