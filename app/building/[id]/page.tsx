"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'next/navigation';

interface ButtonProps {
  id: string;
  top: number;
  left: number;
  co2: number;
}

const BuildingDetail: React.FC = () => {
  const [buttons, setButtons] = useState<ButtonProps[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [co2Level, setCo2Level] = useState<number | null>(null);
  const [dragging, setDragging] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [buttonToDelete, setButtonToDelete] = useState<string | null>(null);

  const params = useParams();
  const { id } = params;

  const buildingData = {
    1: {
      name: 'Building A',
      image: '/buildingA.jpg',
      type: 'Hotel',
      totalCO2: 1500,
    },
    2: {
      name: 'Building B',
      image: '/buildingB.webp',
      type: 'Factory',
      totalCO2: 2500,
    },
    3: {
      name: 'Building C',
      image: '/buildingC.webp',
      type: 'Mall',
      totalCO2: 1800,
    },
  }[id as string];

  useEffect(() => {
    const savedButtons = localStorage.getItem(`building-${id}-buttons`);
    const savedEditMode = localStorage.getItem(`building-${id}-editMode`);
    if (savedButtons) {
      setButtons(JSON.parse(savedButtons));
    }
    if (savedEditMode) {
      setEditMode(JSON.parse(savedEditMode));
    }
  }, [id]);

  const handleAddButton = () => {
    if (editMode) {
      setButtons([...buttons, { id: uuidv4(), top: 100, left: 100, co2: Math.floor(Math.random() * 500) }]);
    }
  };

  const handleMouseDown = (id: string) => {
    if (editMode) {
      setDragging(id);
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (dragging && editMode) {
      const newButtons = buttons.map(button =>
        button.id === dragging ? { ...button, top: event.clientY - 40, left: event.clientX - 40 } : button
      );
      setButtons(newButtons);
    }
  };

  const handleSave = () => {
    setEditMode(false);
    localStorage.setItem(`building-${id}-buttons`, JSON.stringify(buttons));
    localStorage.setItem(`building-${id}-editMode`, JSON.stringify(false));
    console.log('Buttons and edit mode saved:', buttons);
  };

  const handleEdit = () => {
    setEditMode(true);
    localStorage.setItem(`building-${id}-editMode`, JSON.stringify(true));
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, co2: number) => {
    if (!editMode) {
      const rect = event.currentTarget.getBoundingClientRect();
      setModalPosition({ top: rect.top + window.scrollY + rect.height, left: rect.left + window.scrollX });
      setCo2Level(co2);
      setShowModal(true);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setCo2Level(null);
  };

  const handleRightClick = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    event.preventDefault();
    if (editMode) {
      setButtonToDelete(id);
      setShowDeleteModal(true);
      const rect = event.currentTarget.getBoundingClientRect();
      setModalPosition({ top: rect.top + window.scrollY + rect.height, left: rect.left + window.scrollX });
    }
  };

  const handleDelete = () => {
    setButtons(buttons.filter(button => button.id !== buttonToDelete));
    setShowDeleteModal(false);
    setButtonToDelete(null);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setButtonToDelete(null);
  };

  if (!buildingData) {
    return <p>Building not found</p>;
  }

  return (
    <div className="relative" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <h1 className="text-4xl font-bold mb-4">{buildingData.name}</h1>
      <img src={buildingData.image} alt={buildingData.name} className="w-1/2 h-full object-cover mb-4" />
      <p className="text-gray-600 mb-1">Type: {buildingData.type}</p>
      <p className="text-gray-600 mb-1">Total CO2 Detected: {buildingData.totalCO2} ppm</p>
      {buttons.map((button) => (
        <button
          key={button.id}
          className="absolute w-8 h-8 bg-red-500 rounded-full"
          style={{ top: button.top, left: button.left }}
          onMouseDown={() => handleMouseDown(button.id)}
          onClick={(e) => handleClick(e, button.co2)}
          onContextMenu={(e) => handleRightClick(e, button.id)}
        />
      ))}
      {showModal && (
        <div
          className="absolute p-4 bg-white border border-gray-300 rounded shadow-lg"
          style={{ top: modalPosition.top, left: modalPosition.left }}
        >
          <p>CO2 Level: {co2Level} ppm</p>
          <button
            className="mt-2 px-4 py-2 bg-gray-300 rounded"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      )}
      {showDeleteModal && (
        <div
          className="absolute p-4 bg-white border border-gray-300 rounded shadow-lg"
          style={{ top: modalPosition.top, left: modalPosition.left }}
        >
          <p>Are you sure you want to delete this button?</p>
          <button
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className="mt-2 ml-2 px-4 py-2 bg-gray-300 rounded"
            onClick={handleCloseDeleteModal}
          >
            Cancel
          </button>
        </div>
      )}
      {editMode ? (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleAddButton}
        >
          Add Position
        </button>
      ) : (
        <button
          className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded"
          onClick={handleEdit}
        >
          Edit
        </button>
      )}
      <button
        className="mt-4 ml-2 px-4 py-2 bg-green-500 text-white rounded"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default BuildingDetail;
