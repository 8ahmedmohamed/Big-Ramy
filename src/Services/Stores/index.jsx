import { useState, createContext, useReducer, useEffect } from 'react';

// Translation
import { useTranslation } from 'react-i18next';

// Reducers
import { ReducerInit, Reducer } from './reducer';

// Context
export const Store = createContext({});

const StoreProvider = ({ children }) => {
    const [ setting, setSetting ] = useState();
    const [ data, dispatch ] = useReducer(Reducer, ReducerInit);
    const { t } = useTranslation(['Global']);
    const [ gridLocaleText, setGridLocaleText ] = useState({});

    // Set Grid LocaleText
    useEffect(() => {
        setGridLocaleText({
            toolbarNew: t('Global:toolbarNew'),
            noRowsLabel: t('Global:noRowsLabel'),
            toolbarExport: t('Global:toolbarExport'),
            modalAddTitle: t('Global:modalAddTitle'),
            toolbarColumns: t('Global:toolbarColumns'),
            toolbarFilters: t('Global:toolbarFilters'),
            modalAddButton: t('Global:modalAddButton'),
            modalEditTitle: t('Global:modalEditTitle'),
            paginationLabel: t('Global:paginationLabel'),
            modalEditButton: t('Global:modalEditButton'),
            columnMenuFilter: t('Global:columnMenuFilter'),
            gridHeaderAction: t('Global:gridHeaderAction'),
            modalDeleteTitle: t('Global:modalDeleteTitle'),
            toolbarExportCSV: t('Global:toolbarExportCSV'),
            columnMenuUnsort: t('Global:columnMenuUnsort'),
            columnMenuSortAsc: t('Global:columnMenuSortAsc'),
            paginationLabelOf: t('Global:paginationLabelOf'),
            modalDeleteButton: t('Global:modalDeleteButton'),
            columnMenuSortDesc: t('Global:columnMenuSortDesc'),
            filterPanelColumns: t('Global:filterPanelColumns'),
            modalDeleteMessage: t('Global:modalDeleteMessage'),
            toolbarExportPrint: t('Global:toolbarExportPrint'),
            filterPanelOperator: t('Global:filterPanelOperator'),
            columnMenuHideColumn: t('Global:columnMenuHideColumn'),
            filterOperatorEquals: t('Global:filterOperatorEquals'),
            filterPanelInputLabel: t('Global:filterPanelInputLabel'),
            filterOperatorIsAnyOf: t('Global:filterOperatorIsAnyOf'),
            filterOperatorIsEmpty: t('Global:filterOperatorIsEmpty'),
            filterOperatorEndsWith: t('Global:filterOperatorEndsWith'),
            filterOperatorContains: t('Global:filterOperatorContains'),
            columnMenuManageColumns: t('Global:columnMenuManageColumns'),
            filterOperatorStartsWith: t('Global:filterOperatorStartsWith'),
            filterOperatorIsNotEmpty: t('Global:filterOperatorIsNotEmpty'),
            columnsPanelHideAllButton: t('Global:columnsPanelHideAllButton'),
            columnsPanelShowAllButton: t('Global:columnsPanelShowAllButton'),
            columnsPanelTextFieldLabel: t('Global:columnsPanelTextFieldLabel'),
            filterPanelInputPlaceholder: t('Global:filterPanelInputPlaceholder'),
            columnsPanelTextFieldPlaceholder: t('Global:columnsPanelTextFieldPlaceholder')
        })
    }, [t]);

    return (
        <Store.Provider value={{ setting, setSetting, data, dispatch, gridLocaleText }}>
            {children}
        </Store.Provider>
    )
}

export default StoreProvider;