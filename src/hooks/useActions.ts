import { useDispatch } from "react-redux";
import {itemsSlice} from '../store/reducers/item.reducer'
import { useMemo } from "react";
import { bindActionCreators } from "redux";

const rootActions = {
    ...itemsSlice.actions
};

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};