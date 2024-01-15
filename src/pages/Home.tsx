import { Accordion } from "../components/Accordion";
import SearchUI from "../components/SearchUI";
import {
  IselectedOption,
  SelectWithSearch,
} from "../components/SelectWithSearch";
import SelectedDocument, {
  IselectedDocument,
} from "../components/documents/SelectedDocument";
import ToggleSwitch from "../components/ToggleSwitch";
import { accordionItems } from "../data/accordion";
import { filterDropDownMenuItems } from "../data/dropdown";
import TagUi from "../components/TagUi";
import { useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

export interface IFilterTags {
  id: number;
  parentId: number;
  filterName: string;
  filterValue: string;
  textcolor: string;
  bgcolor: string;
}

const Home = () => {
  const [documents, setDocuments] = useState(accordionItems);

  const [selectedDocuments, setSelectedDocuments] = useState<
    IselectedDocument[]
  >([]);
  const [searchQuery, setSearchQuery] = useState("");

  const ref = useOutsideClick(() => {
    console.log("Clicked outside of MyComponent");
  });

  const filterdDocuments = documents?.filter((option) =>
    option?.title?.toLowerCase()?.startsWith(searchQuery?.toLowerCase())
  );

  const onSearchQueryChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(e.target.value);
  };

  const handleRemoveSelectedDocument = (
    selectedDocument: IselectedDocument
  ) => {
    const parentDocumentIndex = documents.findIndex(
      (el) => el.id === selectedDocument.parentId
    );

    if (parentDocumentIndex) {
      const contents = documents[parentDocumentIndex].contents;
      const newContent = contents.findIndex(
        (el) => el.id === selectedDocument.id
      );

      const newContents = [...contents];

      if (newContent < 0) {
        newContents.push({
          id: selectedDocument.id,
          contentDescription: selectedDocument.content,
        });

        const tempDocuments = [...documents];
        tempDocuments[parentDocumentIndex].contents = newContents;
        setDocuments(tempDocuments);
      }

      const newSelectedDocuments = selectedDocuments.filter(
        (el: IselectedDocument) => el.id !== selectedDocument.id
      );
      setSelectedDocuments(newSelectedDocuments);
    }
  };

  const handleSelectAll = (select: boolean) => {
    if (select) {
      console.log("documents", documents);
      const newArray = documents
        .map((el) =>
          el.contents.map((item) => {
            return {
              id: item.id,
              content: item.contentDescription,
              parentId: el.id,
            };
          })
        )
        .filter((el) => el.length);

      const finalNewArray: IselectedDocument[] = newArray.flat();

      const parentIds = finalNewArray.map((el) => el.parentId);
      const getUniqueParentIds = [...new Set(parentIds)];

      for (let index = 0; index < getUniqueParentIds.length; index++) {
        const parentId = getUniqueParentIds[index];

        const parentIndex = documents.findIndex((el) => el.id === parentId);
        if (parentIndex) {
          //update contents
          const tempDocs = [...documents];
          tempDocs[parentIndex].contents = [];
          setDocuments(tempDocs);
        }
      }

      if (finalNewArray) {
        setSelectedDocuments(finalNewArray);
      }
    } else {
      setDocuments(accordionItems);
      setSelectedDocuments([]);
    }
  };

  const handleApplyFilters = (data: IselectedOption) => {
    console.log("data", data);

    // const findParentId =
  };

  return (
    <div className="flex gap-6 flex-wrap">
      <div className="bg-white flex-1  border-[#D1D5DB] p-4 flex flex-col gap-3 rounded-lg ">
        <p className="text-base font-medium text-[#111928]">
          Available Documents
        </p>
        <div className="flex flex-col gap-3 w-full h-full">
          <div className="flex flex-col gap-3">
            <SearchUI
              value={searchQuery}
              onChangeHandler={onSearchQueryChangeHandler}
            />
            <p className="text-sm font-medium text-[#111928] text-left">
              Filter by:
            </p>
            <div className="grid grid-rows-2 grid-flow-col gap-3">
              {filterDropDownMenuItems.map((el, i) => (
                <div className="flex flex-col gap-3">
                  <SelectWithSearch
                    title={el.title}
                    options={el.items}
                    key={i}
                    id={el.id}
                    handleApplyFilters={handleApplyFilters}
                  />
                </div>
              ))}
            </div>
            <div
              className="rounded flex flex-wrap border border-[#E5E7EB] gap-2 p-2"
              ref={ref}
            >
              <TagUi />
            </div>
            <div
              className="flex justify-between"
              style={{
                padding: "8px 6px ",
              }}
            >
              <p className="text-sm font-medium text-[#111928] my-auto p">
                53 Available Documents
              </p>
              <ToggleSwitch handleToggle={handleSelectAll} />
            </div>
          </div>
          <div className="flex-grow flex-col justify-between bg-[#F9FAFB] rounded-lg border border-[#FF5A1F] overflow-hidden">
            {filterdDocuments.map((item, i) => (
              <Accordion
                title={item?.title}
                contents={item.contents}
                id={item.id}
                key={i}
                setDocuments={setDocuments}
                setSelectedDocuments={setSelectedDocuments}
                documents={documents}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white flex-1 border-solid border-[#D1D5DB] p-4 flex flex-col gap-3 rounded-lg">
        <SelectedDocument
          selectedDocuments={selectedDocuments}
          handlerRemoveDocument={handleRemoveSelectedDocument}
        />
      </div>
    </div>
  );
};

export default Home;
