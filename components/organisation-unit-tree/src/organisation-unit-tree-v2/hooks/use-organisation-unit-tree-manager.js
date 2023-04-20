import { useContext, createContext } from 'react'

export const OrganisationUnitTreeManagerContext = createContext(null)

export const useOrganisationUnitTreeManager = () =>
    useContext(OrganisationUnitTreeManagerContext)
