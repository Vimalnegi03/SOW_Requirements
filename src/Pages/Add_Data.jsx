import React, { useState, useEffect } from 'react';
import Headers from './Headers';
const initialVisits = [
  {
    id: 1,
    start: 'Mumbai',
    end: 'Pune',
    dateRange: '01 Jul 2025 - 05 Jul 2025',
    days: 5,
    team: 'Alice, Bob, Charlie',
    visitType: 'OnVisit',
    place: 'School A',
    objective: 'Health Checkup',
    feedback: 'Positive response from staff',
    attendance: {
      teachers: 10,
      parents: 15,
      students: 120,
      male: 60,
      female: 60,
    },
    star: 'Ravi Sharma',
    starImage:
      'https://images.pexels.com/photos/15612102/pexels-photo-15612102.jpeg',
    activities: 'Medical Checkup, Awareness Session',
    others: {
      busNo: 'MH3010',
      smcCount: 0,
      ngoCount: 1,
      govtOfficials: 2,
      challenges: 'Heavy rain',
      images: [
        {
          url: 'https://images.pexels.com/photos/31447794/pexels-photo-31447794.jpeg',
          caption: 'Precious smiles',
        },
        {
          url: 'https://images.pexels.com/photos/3231358/pexels-photo-3231358.jpeg',
          caption: 'Concentration is the key',
        },
      ],
    },
  },
  {
    id: 2,
    start: 'Delhi',
    end: 'Gurgaon',
    dateRange: '10 Jul 2025 - 12 Jul 2025',
    days: 3,
    team: 'Diana, Edward',
    visitType: 'OnVisit',
    place: 'Community Center',
    objective: 'Infrastructure Assessment',
    feedback: 'Area well-maintained',
    attendance: {
      teachers: 10,
      parents: 10,
      students: 80,
      male: 40,
      female: 40,
    },
    star: 'Priya Singh',
    starImage: '',
    activities: 'Report Compilation',
    others: {
      busNo: '',
      smcCount: '',
      ngoCount: '',
      govtOfficials: '',
      challenges: '',
      images: [{ url: '', caption: '' }, { url: '', caption: '' }],
    },
  },
  {
    id: 3,
    start: 'Chennai',
    end: 'Coimbatore',
    dateRange: '15 Jul 2025 - 20 Jul 2025',
    days: 6,
    team: 'Fiona, George, Henry',
    visitType: 'OnVisit',
    place: 'Village School',
    objective: 'Educational Support',
    feedback: 'Needs more resources',
    attendance: {
      teachers: 10,
      parents: 12,
      students: 95,
      male: 45,
      female: 50,
    },
    star: 'Manish Kumar',
    starImage: '',
    activities: 'Tutoring, Supplies Distribution',
    others: {
      busNo: '',
      smcCount: '',
      ngoCount: '',
      govtOfficials: '',
      challenges: '',
      images: [{ url: '', caption: '' }, { url: '', caption: '' }],
    },
  },
];

function AddDataTable() {
  const [visits, setVisits] = useState(() => {
    const stored = localStorage.getItem('visitsData');
    return stored ? JSON.parse(stored) : initialVisits;
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [modalContent, setModalContent] = useState(null);
 
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    start: '',
    end: '',
    dateRange: '',
    days: '',
    team: '',
    visitType: '',
    place: '',
    objective: '',
    feedback: '',
    attendance: {
      teachers: '',
      parents: '',
      students: '',
      male: '',
      female: '',
    },
    star: '',
    starImage: '',
    starReviews:'',
    activities: '',
    others: {
      busNo: '',
      smcCount: '',
      ngoCount: '',
      govtOfficials: '',
      challenges: '',
      images: [
        { url: '', caption: '' },
        { url: '', caption: '' },
      ],
    },
  });

  useEffect(() => {
    localStorage.setItem('visitsData', JSON.stringify(visits));
  }, [visits]);

  const openModal = (type, content) => {
    setModalType(type);
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType(null);
    setModalContent(null);
  };

  const toggleForm = () => {
    setFormOpen((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('others.images')) {
      const match = name.match(/others\.images\[(\d+)\]\.(url|caption)/);
      if (match) {
        const index = parseInt(match[1]);
        const key = match[2];
        const imgs = [...formData.others.images];
        imgs[index][key] = value;
        setFormData((prev) => ({
          ...prev,
          others: {
            ...prev.others,
            images: imgs,
          },
        }));
      }
      return;
    }
    if (name.startsWith('attendance.')) {
      const key = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        attendance: {
          ...prev.attendance,
          [key]: value,
        },
      }));
      return;
    }
    if (name.startsWith('others.')) {
      const key = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        others: {
          ...prev.others,
          [key]: value,
        },
      }));
      return;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.start ||
      !formData.end ||
      !formData.dateRange ||
      !formData.days ||
      !formData.team
    ) {
      alert('Please fill required fields: Start, End, Date Range, Days, Team');
      return;
    }
    const newVisit = {
      ...formData,
      id: Date.now(),
      days: Number(formData.days),
      attendance: {
        teachers: Number(formData.attendance.teachers) || 0,
        parents: Number(formData.attendance.parents) || 0,
        students: Number(formData.attendance.students) || 0,
        male: Number(formData.attendance.male) || 0,
        female: Number(formData.attendance.female) || 0,
      },
    };
    setVisits((prev) => [newVisit, ...prev]);
    setFormOpen(false);
    setFormData({
      start: '',
      end: '',
      dateRange: '',
      days: '',
      team: '',
      visitType: '',
      place: '',
      objective: '',
      feedback: '',
      attendance: {
        teachers: '',
        parents: '',
        students: '',
        male: '',
        female: '',
      },
      star: '',
      starImage: '',
      starReviews: "",
      activities: '',
      others: {
        busNo: '',
        smcCount: '',
        ngoCount: '',
        govtOfficials: '',
        challenges: '',
        images: [
          { url: '', caption: '' },
          { url: '', caption: '' },
        ],
      },
    });
  };
console.log(modalContent);

  return (
    <>
    <Headers/>
    <div className="p-6  min-h-screen bg-white">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-black">SOW school visits details</h2>

      <div className="flex justify-center mb-6">
        <button
          className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={toggleForm}
        >
          {formOpen ? 'Cancel' : 'Add Visit'}
        </button>
      </div>

      {formOpen && (
        <form
          onSubmit={handleSubmit}
          className="max-w-6xl mx-auto  p-6 rounded shadow mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label htmlFor="start" className="block mb-1 font-semibold text-black">
                Start Location *
              </label>
              <input
                type="text"
                id="start"
                name="start"
                value={formData.start}
                onChange={handleInputChange}
                required
                className="input input-bordered w-full"
                placeholder="Start Location"
              />
            </div>
            <div>
              <label htmlFor="end" className="block mb-1 font-semibold text-black">
                End Location *
              </label>
              <input
                type="text"
                id="end"
                name="end"
                value={formData.end}
                onChange={handleInputChange}
                required
                className="input input-bordered w-full"
                placeholder="End Location"
              />
            </div>
            <div>
              <label htmlFor="dateRange" className="block mb-1 font-semibold text-black">
                Date Range *
              </label>
              <input
                type="text"
                id="dateRange"
                name="dateRange"
                value={formData.dateRange}
                onChange={handleInputChange}
                placeholder="01 Jul 2025 - 05 Jul 2025"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label htmlFor="days" className="block mb-1 font-semibold text-black">
                Days *
              </label>
              <input
                type="number"
                id="days"
                name="days"
                min="1"
                value={formData.days}
                onChange={handleInputChange}
                required
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label htmlFor="team" className="block mb-1 font-semibold text-black">
                Team Members *
              </label>
              <input
                type="text"
                id="team"
                name="team"
                value={formData.team}
                onChange={handleInputChange}
                placeholder="Alice, Bob, Charlie"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label htmlFor="visitType" className="block mb-1 font-semibold text-black">
                Visit Type
              </label>
              <input
                type="text"
                id="visitType"
                name="visitType"
                value={formData.visitType}
                onChange={handleInputChange}
                placeholder="OnVisit"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label htmlFor="place" className="block mb-1 font-semibold text-black">
                School
              </label>
              <input
                type="text"
                id="place"
                name="place"
                value={formData.place}
                onChange={handleInputChange}
                placeholder="School A"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label htmlFor="objective" className="block mb-1 font-semibold text-black">
                Objective
              </label>
              <input
                type="text"
                id="objective"
                name="objective"
                value={formData.objective}
                onChange={handleInputChange}
                placeholder="Health Checkup"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label htmlFor="feedback" className="block mb-1 font-semibold text-black">
                Feedback
              </label>
              <input
                type="text"
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleInputChange}
                placeholder="Positive response from staff"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <fieldset className="border  p-4 rounded mb-6">
            <legend className="font-semibold text-lg mb-3 text-black">Attendance</legend>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              {['teachers', 'parents', 'students', 'male', 'female'].map((key) => (
                <div key={key}>
                  <label htmlFor={`attendance.${key}`} className="block mb-1 capitalize font-semibold text-black">
                    {key}
                  </label>
                  <input
                    type="number"
                    min="0"
                    id={`attendance.${key}`}
                    name={`attendance.${key}`}
                    value={formData.attendance[key]}
                    onChange={handleInputChange}
                    className="input input-bordered w-full "
                  />
                </div>
              ))}
            </div>
          </fieldset>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="star" className="block mb-1 font-semibold text-black">
                Star (Student Name)
              </label>
              <input
                type="text"
                id="star"
                name="star"
                value={formData.star}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                placeholder="Ravi Sharma"
              />
            </div>
            <div>
              <label htmlFor="starImage" className="block mb-1 font-semibold text-black">
                Star Image URL
              </label>
              <input
                type="text"
                id="starImage"
                name="starImage"
                value={formData.starImage}
                onChange={handleInputChange}
                className="input input-bordered w-full "
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>
           <div className="mb-6">
            <label htmlFor=" starReviews" className="block mb-1 font-semibold text-black">
              Star Review
            </label>
            <input
              type="text"
              id="starReviews"
              name="starReviews"
              value={formData. starReviews}
              onChange={handleInputChange}
              className="input input-bordered w-full "
              placeholder="Medical Checkup, Awareness Session"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="activities" className="block mb-1 font-semibold text-black">
              Activities
            </label>
            <input
              type="text"
              id="activities"
              name="activities"
              value={formData.activities}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              placeholder="Medical Checkup, Awareness Session"
            />
          </div>

          <fieldset className="border  p-4 rounded mb-6">
            <legend className="font-semibold text-lg mb-3 text-black">Others</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="others.busNo" className="block mb-1 font-semibold text-black">
                  Bus No
                </label>
                <input
                  type="text"
                  id="others.busNo"
                  name="others.busNo"
                  value={formData.others.busNo}
                  onChange={handleInputChange}
                  className="input input-bordered w-full "
                  placeholder="MH3010"
                />
              </div>
              <div>
                <label htmlFor="others.smcCount" className="block mb-1 font-semibold text-black">
                  SMC Count
                </label>
                <input
                  type="number"
                  min="0"
                  id="others.smcCount"
                  name="others.smcCount"
                  value={formData.others.smcCount}
                  onChange={handleInputChange}
                  className="input input-bordered w-full "
                  placeholder="0"
                />
              </div>
              <div>
                <label htmlFor="others.ngoCount" className="block mb-1 font-semibold text-black">
                  NGO Member Count
                </label>
                <input
                  type="number"
                  min="0"
                  id="others.ngoCount"
                  name="others.ngoCount"
                  value={formData.others.ngoCount}
                  onChange={handleInputChange}
                  className="input input-bordered w-full "
                  placeholder="1"
                />
              </div>
              <div>
                <label htmlFor="others.govtOfficials" className="block mb-1 font-semibold text-black">
                  Number of Govt Officials
                </label>
                <input
                  type="number"
                  min="0"
                  id="others.govtOfficials"
                  name="others.govtOfficials"
                  value={formData.others.govtOfficials}
                  onChange={handleInputChange}
                  className="input input-bordered w-full "
                  placeholder="2"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="others.challenges" className="block mb-1 font-semibold text-black">
                  Challenges
                </label>
                <textarea
                  id="others.challenges"
                  name="others.challenges"
                  rows="3"
                  value={formData.others.challenges}
                  onChange={handleInputChange}
                  className="textarea textarea-bordered w-full "
                  placeholder="Challenges if any"
                />
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2  text-black">Event Images & Captions (up to 2)</p>
              {[0, 1].map((i) => (
                <div key={i} className="mb-4">
                  <input
                    type="text"
                    placeholder="Image URL"
                    name={`others.images[${i}].url`}
                    value={formData.others.images[i].url}
                    onChange={handleInputChange}
                    className="input input-bordered w-full mb-2 "
                  />
                  <input
                    type="text"
                    placeholder="Caption"
                    name={`others.images[${i}].caption`}
                    value={formData.others.images[i].caption}
                    onChange={handleInputChange}
                    className="input input-bordered w-full "
                  />
                </div>
              ))}
            </div>
          </fieldset>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-success px-10 py-3 transition hover:bg-green-700"
            >
              Add Visit
            </button>
          </div>
        </form>
      )}

      {/* Data Table */}
      <div className="overflow-x-auto border rounded-lg shadow-lg">
        <table className="min-w-[1100px] w-full border-collapse">
          <thead className=" sticky top-0 z-20">
            <tr>
              <th className="border  px-3 sm:px-4 py-3 text-black">Visit Details</th>
              <th className="border  px-3 sm:px-4 py-3 text-black">Team Members</th>
              <th className="border  px-3 sm:px-4 py-3 text-black">Visit Type</th>
              <th className="border px-3 sm:px-4 py-3 text-black">Visit Place</th>
              <th className="border  px-3 sm:px-4 py-3 text-black">Objective</th>
              <th className="border  px-3 sm:px-4 py-3 text-black">Feedback</th>
              <th className="border  px-3 sm:px-4 py-3 text-black">Parents</th>
              <th className="border px-3 sm:px-4 py-3 text-black">Teachers</th>
              <th className="border  px-3 sm:px-4 py-3 text-black">Students</th>
              <th className="border  px-3 sm:px-4 py-3 text-black">Male</th>
              <th className="border  px-3 sm:px-4 py-3 text-black">Female</th>
              <th className="border px-3 sm:px-4 py-3 text-black">Star</th>
              <th className="border  px-3 sm:px-4 py-3 text-black">Activities</th>
              <th className="border  px-3 sm:px-4 py-3 text-black">Others</th>
            </tr>
          </thead>
          <tbody>
            {visits.map((visit) => (
              <tr key={visit.id || visit.start + visit.end} className="hover:bg-blue-50">
                <td className="border px-3 sm:px-4 py-2 text-left align-top">
                  <div>
                    <div className='text-black'><strong>Start:</strong> {visit.start}</div>
                    <div className='text-black'><strong>End:</strong> {visit.end}</div>
                    <div className='text-black'><strong>Date:</strong> {visit.dateRange}</div>
                    <div className='text-black'><strong>Days:</strong> {visit.days}</div>
                  </div>
                </td>
                <td className="border  px-3 sm:px-4 py-2 text-center text-black">{visit.team}</td>
                <td className="border  px-3 sm:px-4 py-2 text-center text-black">{visit.visitType}</td>
                <td className="border  px-3 sm:px-4 py-2 text-center text-black">{visit.place}</td>
                <td className="border  px-3 sm:px-4 py-2 text-center text-black">{visit.objective}</td>
                <td className="border  px-3 sm:px-4 py-2 text-center text-black">{visit.feedback}</td>
                <td className="border  px-3 sm:px-4 py-2 text-center text-black">{visit.attendance.parents}</td>
                <td className="border  px-3 sm:px-4 py-2 text-center text-black">{visit.attendance.teachers}</td>
                <td className="border  px-3 sm:px-4 py-2 text-center text-black">{visit.attendance.students}</td>
                <td className="border  px-3 sm:px-4 py-2 text-center text-black">{visit.attendance.male}</td>
                <td className="border  px-3 sm:px-4 py-2 text-center text-black">{visit.attendance.female}</td>
                <td
                  className="border px-3 sm:px-4 py-2 text-center cursor-pointer text-blue-600 hover:underline "
                  onClick={() => openModal('star', visit)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') openModal('star', visit.star);
                  }}
                  aria-label={`Open details for star student ${visit.star}`}
                >
                  {visit.star}
                </td>
                <td className="border  px-3 sm:px-4 py-2 text-center text-black ">{visit.activities}</td>
                <td
                  className="border  px-3 sm:px-4 py-2 text-center cursor-pointer text-blue-600 hover:underline"
                  onClick={() => openModal('others', visit.others)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') openModal('others', visit.others);
                  }}
                  aria-label={`Open other notes`}
                >
                  Click Here
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {modalOpen && modalType === 'star' && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-star-title"
        >
          <div
            className=" rounded-lg shadow-lg max-w-md w-full p-6 mx-2 max-h-[calc(100vh-4rem)] overflow-y-auto bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id="modal-star-title"
              className="text-2xl font-bold mb-4 text-center text-black "
            >
              Student Details
            </h2>

            <img
              src={modalContent.starImage || 'https://images.pexels.com/photos/15612102/pexels-photo-15612102.jpeg'}
              alt={modalContent}
              className="mx-auto mb-4 rounded w-full max-w-xs object-cover "
              style={{ maxHeight: '200px', objectFit: 'cover' }}
            />
            <p className="text-center text-lg font-semibold mb-2 text-black">{modalContent.star}</p>
            <p className="text-center mb-4 text-black">
              <strong>School:</strong> {modalContent.place}
            </p>
            <p className="mb-4 text-black">
              {modalContent?.starReviews}
            </p>

            <div className="flex justify-center">
              <button
                className="btn btn-primary"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {modalOpen && modalType === 'others' && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-others-title"
        >
          <div
            className=" rounded-lg shadow-lg max-w-md w-full p-6 mx-2 max-h-[calc(100vh-4rem)] overflow-y-auto bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id="modal-others-title"
              className="text-2xl font-bold mb-4 text-center text-black "
            >
              Other Data About Visit -:
            </h2>

            <p className="text-center text-black text-base sm:text-lg px-2"><strong>Bus No:</strong> {modalContent.busNo}</p>
            <p className="text-center  text-black text-base sm:text-lg px-2"><strong>SMC Count:</strong> {modalContent.smcCount}</p>
            <p className="text-center  text-black text-base sm:text-lg px-2"><strong>NGO Member Count:</strong> {modalContent.ngoCount}</p>
            <p className="text-center text-black text-base sm:text-lg px-2"><strong>Number of govt. officials:</strong> {modalContent.govtOfficials}</p>
            <p className="text-center text-black text-base sm:text-lg px-2"><strong>Challenges if any:</strong> {modalContent.challenges}</p>

            {modalContent.images && modalContent.images.length > 0 && (
              <div>
                <strong className='text-black'>Images of Event:</strong>
                <div className="grid grid-cols-1 gap-4 mt-2">
                  {modalContent.images.map((imgObj, i) =>
                    imgObj.url ? (
                      <figure key={i} className="max-w-full">
                        <img src={imgObj.url} alt={imgObj.caption || `Event image ${i + 1}`} />
                        {imgObj.caption && (
                          <figcaption className="text-center text-sm font-semibold text-black-800">
                            {imgObj.caption}
                          </figcaption>
                        )}
                      </figure>
                    ) : null
                  )}
                </div>
              </div>
            )}

            <div className="flex justify-center mt-6">
              <button
                className="btn btn-primary"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
</>
  );
}

export default AddDataTable;
