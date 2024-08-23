import React from "react";
import NoteCardContainer from "../components/NoteCardContainer";
import Filter from "../components/filter";

const HomePage = ({ notes, loading, handleFilterText }) => {
  return (
    <>
      {notes.length < 1 ? (
        <h4 style={{ textAlign: "center", marginTop: "10px" }}>
          There is no records found with the search phrase above
        </h4>
      ) : (
        <Filter handleFilterText={handleFilterText} />
      )}
      <NoteCardContainer notes={notes} loading={loading} />
    </>
  );
};

export default HomePage;