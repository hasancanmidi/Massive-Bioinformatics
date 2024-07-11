import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../redux/slices/characterSlice';
import './Characters.css';
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

function Characters() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCharacters(searchTerm));
    }
  }, [status, dispatch, searchTerm]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  const onCharacterSelect = (e) => {
    setSelectedCharacter(e.data);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
    setSelectedCharacter(null);
  };

  const renderCharacterDetails = () => {
    if (!selectedCharacter) return null;

    return (
      <div className="character-details">
        <img src={selectedCharacter.image} alt={selectedCharacter.name} />
        <h3>{selectedCharacter.name}</h3>
        <p><strong>Status:</strong> {selectedCharacter.status}</p>
        <p><strong>Species:</strong> {selectedCharacter.species}</p>
        <p><strong>Gender:</strong> {selectedCharacter.gender}</p>
        <p><strong>Origin:</strong> {selectedCharacter.origin.name}</p>
        <p><strong>Location:</strong> {selectedCharacter.location.name}</p>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className='characters-page card mt-5'>
        <DataTable
          value={characters}
          paginator
          selectionMode="single"
          dataKey="id"
          filterDisplay="row"
          removableSort
          rows={20}
          rowsPerPageOptions={[10, 20, 50, 100]}
          globalFilterFields={['name']}
          emptyMessage="No Characters found."
          onRowSelect={onCharacterSelect}
        >
          <Column field="id" filter filterPlaceholder="Search by id" sortable header="ID"></Column>
          <Column field="name" filter filterPlaceholder="Search by name" header="Name"></Column>
          <Column field="status" filter filterPlaceholder="Search by status" sortable header="Status"></Column>
          <Column field="species" filter filterPlaceholder="Search by species" header="Species"></Column>
          <Column field="gender" filter filterPlaceholder="Search by gender" header="Gender"></Column>
        </DataTable>

        <Dialog header="Character Details" visible={isModalVisible} style={{ width: '50vw' }} modal onHide={hideModal}>
          {renderCharacterDetails()}
          <Button label="Close" icon="pi pi-times" onClick={hideModal} />
        </Dialog>
      </div>
      <Footer />
    </>
  );
}

export default Characters;
