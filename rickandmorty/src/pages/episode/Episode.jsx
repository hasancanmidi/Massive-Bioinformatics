import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodes } from '../../redux/slices/episodeSlice';
import './Episode.css';
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';

const Episode = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedEpisode, setSelectedEpisode] = useState(null); // State to manage selected episode for dialog
    const dispatch = useDispatch();
    const episodes = useSelector((state) => state.episodes.items);
    const status = useSelector((state) => state.episodes.status);
    const error = useSelector((state) => state.episodes.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchEpisodes(searchTerm));
        }
    }, [status, dispatch, searchTerm]);

    const openDialog = (rowData) => {
        setSelectedEpisode(rowData);
    };

    const onHideDialog = () => {
        setSelectedEpisode(null); 
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>{error}</div>;
    }

    return (
        <>
            <Header />
            <div className="episodes card mt-5">
                <DataTable
                    value={episodes}
                    paginator
                    selectionMode="single"
                    dataKey="id"
                    filterDisplay="row"
                    removableSort
                    rows={10}
                    rowsPerPageOptions={[10, 20, 50, 100]}
                    globalFilterFields={['name']}
                    emptyMessage="No Episodes found."
                    onRowSelect={(e) => openDialog(e.data)}
                >
                    <Column field="id" sortable header="ID"></Column>
                    <Column field="name" filter filterPlaceholder="Search by name" header="NAME"></Column>
                    <Column field="air_date" header="AIR DATE"></Column>
                </DataTable>

                <Dialog
                    visible={selectedEpisode !== null}
                    onHide={onHideDialog}
                    header={selectedEpisode?.name}
                    modal
                >
                    <div>
                        <p><strong>ID:</strong> {selectedEpisode?.id}</p>
                        <p><strong>Name:</strong> {selectedEpisode?.name}</p>
                        <p><strong>Air Date:</strong> {selectedEpisode?.air_date}</p>
                    </div>
                </Dialog>
            </div>
            <Footer />
        </>
    );
};

export default Episode;
