import React, { useState } from 'react';

const visits = [
  {
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
    activities: 'Medical Checkup, Awareness Session',
    others: 'None',
  },
  {
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
    activities: 'Report Compilation',
    others: 'Next visit planned',
  },
  {
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
    activities: 'Tutoring, Supplies Distribution',
    others: 'Follow up required',
  },
];

function VisitDetailsTable() {
  // modalType: 'star' | 'others' | null
  const [modalType, setModalType] = useState(null);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (type, content) => {
    setModalType(type);
    setModalContent(content);
  };

  const closeModal = () => {
    setModalType(null);
    setModalContent(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        Fully Responsive Visit Details Table
      </h2>

      <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-lg bg-white">
        <table className="min-w-[1100px] w-full border-collapse table-auto">
          <thead className="bg-gray-100 sticky top-0 z-20">
            <tr>
              <th className="border border-gray-300 px-3 sm:px-4 py-3 text-center font-semibold text-gray-700 whitespace-normal">
                Visit Details <br /> (Start - End Location, Date & Days)
              </th>
              <th className="border border-gray-300 px-3 sm:px-4 py-3 text-center font-semibold text-gray-700 whitespace-normal">
                Team Members
              </th>
              <th className="border border-gray-300 px-3 sm:px-4 py-3 text-center font-semibold text-gray-700 whitespace-normal">
                Visit Type
              </th>
              <th className="border border-gray-300 px-3 sm:px-4 py-3 text-center font-semibold text-gray-700 whitespace-normal">
                Visit Place
              </th>
              <th className="border border-gray-300 px-3 sm:px-4 py-3 text-center font-semibold text-gray-700 whitespace-normal">
                Objective
              </th>
              <th className="border border-gray-300 px-3 sm:px-4 py-3 text-center font-semibold text-gray-700 whitespace-normal">
                Feedbacks
              </th>
              <th
                colSpan={5}
                className="border border-gray-300 px-3 sm:px-4 py-3 text-center font-semibold text-gray-700"
              >
                Attendance Count
              </th>
              <th className="border border-gray-300 px-3 sm:px-4 py-3 text-center font-semibold text-gray-700 whitespace-normal">
                Star (Student Name)
              </th>
              <th className="border border-gray-300 px-3 sm:px-4 py-3 text-center font-semibold text-gray-700 whitespace-normal">
                Activities
              </th>
              <th className="border border-gray-300 px-3 sm:px-4 py-3 text-center font-semibold text-gray-700 whitespace-normal">
                Others
              </th>
            </tr>
            <tr className="bg-gray-100">
              <th colSpan={6} />
              <th className="border border-gray-300 px-2 sm:px-4 py-2 text-center text-xs sm:text-sm font-semibold text-gray-600 whitespace-nowrap">
                Parents
              </th>
              <th className="border border-gray-300 px-2 sm:px-4 py-2 text-center text-xs sm:text-sm font-semibold text-gray-600 whitespace-nowrap">
                Teachers
              </th>
              <th className="border border-gray-300 px-2 sm:px-4 py-2 text-center text-xs sm:text-sm font-semibold text-gray-600 whitespace-nowrap">
                Students
              </th>
              <th className="border border-gray-300 px-2 sm:px-4 py-2 text-center text-xs sm:text-sm font-semibold text-gray-600 whitespace-nowrap">
                Male
              </th>
              <th className="border border-gray-300 px-2 sm:px-4 py-2 text-center text-xs sm:text-sm font-semibold text-gray-600 whitespace-nowrap">
                Female
              </th>
              <th colSpan={4} />
            </tr>
          </thead>
          <tbody>
            {visits.map((visit, index) => (
              <tr
                key={index}
                tabIndex={0}
                className={`focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } hover:bg-blue-50 cursor-default transition-colors duration-200`}
              >
                <td
                  className="border border-gray-300 px-3 sm:px-4 py-2 text-sm sm:text-base text-left align-top break-words"
                  data-label="Visit Details"
                >
                  <div>
                    <div>
                      <strong>Start:</strong> {visit.start}
                    </div>
                    <div>
                      <strong>End:</strong> {visit.end}
                    </div>
                    <div>
                      <strong>Date:</strong> {visit.dateRange}
                    </div>
                    <div>
                      <strong>Days:</strong> {visit.days}
                    </div>
                  </div>
                </td>

                <td
                  className="border border-gray-300 px-3 sm:px-4 py-2 text-center text-sm sm:text-base align-top"
                  data-label="Team Members"
                >
                  {visit.team}
                </td>

                <td
                  className="border border-gray-300 px-3 sm:px-4 py-2 text-center text-sm sm:text-base align-top"
                  data-label="Visit Type"
                >
                  {visit.visitType}
                </td>

                <td
                  className="border border-gray-300 px-3 sm:px-4 py-2 text-center text-sm sm:text-base align-top"
                  data-label="Visit Place"
                >
                  {visit.place}
                </td>

                <td
                  className="border border-gray-300 px-3 sm:px-4 py-2 text-center text-sm sm:text-base align-top break-words"
                  data-label="Objective"
                >
                  {visit.objective}
                </td>

                <td
                  className="border border-gray-300 px-3 sm:px-4 py-2 text-center text-sm sm:text-base align-top break-words"
                  data-label="Feedbacks"
                >
                  {visit.feedback}
                </td>

                <td
                  className="border border-gray-300 px-2 py-2 text-center text-sm sm:text-base align-top font-medium"
                  data-label="Parents"
                >
                  {visit.attendance.parents}
                </td>

                <td
                  className="border border-gray-300 px-2 py-2 text-center text-sm sm:text-base align-top font-medium"
                  data-label="Teachers"
                >
                  {visit.attendance.teachers}
                </td>

                <td
                  className="border border-gray-300 px-2 py-2 text-center text-sm sm:text-base align-top font-medium"
                  data-label="Students"
                >
                  {visit.attendance.students}
                </td>

                <td
                  className="border border-gray-300 px-2 py-2 text-center text-sm sm:text-base align-top font-medium"
                  data-label="Male"
                >
                  {visit.attendance.male}
                </td>

                <td
                  className="border border-gray-300 px-2 py-2 text-center text-sm sm:text-base align-top font-medium"
                  data-label="Female"
                >
                  {visit.attendance.female}
                </td>

                <td
                  className="border border-gray-300 px-3 sm:px-4 py-2 text-center text-sm sm:text-base align-top break-words cursor-pointer text-blue-600 hover:underline"
                  data-label="Star"
                  onClick={() => openModal('star', visit.star)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') openModal('star', visit.star);
                  }}
                  aria-label={`Open details for star student ${visit.star}`}
                >
                  {visit.star}
                </td>

                <td
                  className="border border-gray-300 max-w-xs px-3 sm:px-4 py-2 text-center text-sm sm:text-base align-top break-words"
                  data-label="Activities"
                >
                  {visit.activities}
                </td>

                <td
                  className="border border-gray-300 px-3 sm:px-4 py-2 text-center text-sm sm:text-base align-top break-words cursor-pointer text-blue-600 hover:underline"
                  data-label="Others"
                  onClick={() => openModal('others', visit.others)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') openModal('others', visit.others);
                  }}
                  aria-label={`Open other notes: ${visit.others}`}
                >
                  Click Here
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalType === 'star' && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-star-title"
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 mx-2"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside modal content
          >
            <h2
              id="modal-star-title"
              className="text-2xl font-bold mb-4 text-center"
            >
              Student Details
            </h2>

            <img
              src="https://images.pexels.com/photos/15612102/pexels-photo-15612102.jpeg"
              alt={modalContent}
              className="mx-auto mb-4 rounded"
              style={{ maxHeight: '200px', objectFit: 'cover' }}
            />
            <p className="text-center text-lg font-semibold mb-2">{modalContent}</p>
            <p className="text-center mb-4">
              <strong>School:</strong> Vidya Niketan
            </p>
            <p className="mb-4">
              It was great to be part of this session and I learnt a lot.
            </p>

            <div className="flex justify-center mt-6">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

     {modalType === 'others' && (
  <div
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    onClick={closeModal}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-others-title"
  >
    <div
      className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 mx-2 max-h-[calc(100vh-4rem)] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
            <h2
              id="modal-others-title"
              className="text-2xl font-bold mb-4 text-center"
            >
              Other Data About Visit -:
            </h2>

            <p className="text-center text-gray-800 text-base sm:text-lg px-2">
             <strong>Bus No:</strong> MH3010
            </p>
             <p className="text-center text-gray-800 text-base sm:text-lg px-2">
             <strong>SMC Count:</strong> 0
            </p>
             <p className="text-center text-gray-800 text-base sm:text-lg px-2">
             <strong>NGO Member Count:</strong> 1
            </p>
             <p className="text-center text-gray-800 text-base sm:text-lg px-2">
             <strong>Number of government officials:</strong> 2
            </p>
             <p className="text-center text-gray-800 text-base sm:text-lg px-2">
             <strong>Challenges if any:</strong> Heavy rain
             <div>
                <strong>Images of Event:</strong>
                <img src="https://images.pexels.com/photos/31447794/pexels-photo-31447794.jpeg" alt="" />
                <strong>Caption:</strong><span>Precious smiles</span>
                 <img src="https://images.pexels.com/photos/3231358/pexels-photo-3231358.jpeg" alt="" />
                <strong>Caption:</strong><span>Concentration is the key</span>
             </div>
            </p>

            <div className="flex justify-center mt-6">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VisitDetailsTable;
