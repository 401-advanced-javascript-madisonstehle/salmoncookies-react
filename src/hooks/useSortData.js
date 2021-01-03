import { useState, useMemo } from 'react';

// Credit to Kristofer Selbekk for writing this article about table sorting hooks: https://www.smashingmagazine.com/2020/03/sortable-tables-react/

const useSortData = (items, config = null) => {
    const [ sortConfig, setSortConfig ] = useState(config);

    const sortedRecords = useMemo(() => {
        let sortableItems = [...items];
        console.log('SORTCONFIG SET', sortConfig);
        console.log('SORTABLE ITEMS', sortableItems);

        if ( sortConfig !== null ) {
            sortableItems.sort((a, b) => {
                if ( a[sortConfig.key] < b[sortConfig.key] ) {
                    return sortConfig.direction ==='ascending' ? -1 : 1;
                }
                if ( a[sortConfig.key] > b[sortConfig.key] ) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        
        return sortableItems;
    }, [items, sortConfig]);


    const requestSort = key => {
        let direction = 'ascending';

        if ( sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending' ) {
            direction = 'descending';
        };

        setSortConfig( { key, direction } );
    }

    return { items: sortedRecords, requestSort };
    
}

export default useSortData;