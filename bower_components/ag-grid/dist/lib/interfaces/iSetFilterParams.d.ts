import { IFilterParams } from "./iFilter";
import { ICellRendererComp, ICellRendererFunc } from "../rendering/cellRenderers/iCellRenderer";
export interface SetFilterValuesFuncParams {
    success: (values: string[]) => void;
}
export declare type SetFilterValuesFunc = (params: SetFilterValuesFuncParams) => void;
export declare type SetFilterValues = SetFilterValuesFunc | any[];
export interface ISetFilterParams extends IFilterParams {
    suppressRemoveEntries?: boolean;
    values?: SetFilterValues;
    cellHeight: number;
    apply: boolean;
    suppressSorting: boolean;
    cellRenderer: {
        new (): ICellRendererComp;
    } | ICellRendererFunc | string;
    newRowsAction: string;
    suppressMiniFilter: boolean;
    selectAllOnMiniFilter: boolean;
    comparator?: (a: any, b: any) => number;
    debounceMs?: number;
}
