import styled from "styled-components";
import { dataCategories } from "../data/dataCategories";
import { HighlightCategoryType } from "../page";
import { ControlsWrapper } from "../style/PageStyle";
import { DataLiberationColors } from "../style/StyleConstants";

export const Controls = ({
  highlightCategory,
  setHighlightCategory,
}: {
  highlightCategory: HighlightCategoryType;
  setHighlightCategory: any;
}) => {
  return (
    <ControlsWrapper>
      <CategoryDropdown
        label="Sort Data By:"
        setHighlightCategory={setHighlightCategory}
        highlightCategory={highlightCategory}
        category={dataCategories.map((x) => x.label)}
      />

      <CategoryDropdown
        key={highlightCategory.category}
        label="Highlight: "
        setHighlightCategory={setHighlightCategory}
        highlightCategory={highlightCategory}
        category={
          dataCategories.filter((x) => x.label == highlightCategory.category)[0]
            .categories
        }
      />
    </ControlsWrapper>
  );
};

const CategoryDropdown = ({
  category,
  label,
  setHighlightCategory,
  highlightCategory,
}: {
  category: string[];
  label: string;
  setHighlightCategory: any;
  highlightCategory: HighlightCategoryType;
}) => {
  return (
    <ControlWrapper>
      <label htmlFor={label}> {label}</label>
      {category.length <= 10 ? (
        <CategoryButtonWrapper>
          {" "}
          {category.map((cat) => (
            <CategoryButton
              background={
                label == "Sort Data By:"
                  ? cat == highlightCategory.category
                    ? DataLiberationColors.grey
                    : DataLiberationColors.grey
                  : cat == highlightCategory.selection
                  ? DataLiberationColors.yellow
                  : DataLiberationColors.grey
              }
              border={
                label == "Sort Data By:"
                  ? cat == highlightCategory.category
                    ? "1px"
                    : "0px"
                  : cat == highlightCategory.selection
                  ? "1px"
                  : "0px"
              }
              key={cat}
              value={cat}
              onClick={() =>
                label == "Sort Data By:"
                  ? setHighlightCategory({
                      selection: dataCategories
                        .filter((x) => x.label == cat)[0]
                        .categories.sort()[0],
                      category: cat,
                    })
                  : setHighlightCategory({
                      selection: cat,
                      category: highlightCategory.category,
                    })
              }
            >
              {cat}
            </CategoryButton>
          ))}
        </CategoryButtonWrapper>
      ) : (
        <CategorySelect
          name={label}
          id={label}
          onChange={(e) =>
            label == "Categories"
              ? setHighlightCategory({
                  selection: dataCategories
                    .filter((x) => x.label == e.target.value)[0]
                    .categories.sort()[0],
                  category: e.target.value,
                })
              : setHighlightCategory({
                  selection: e.target.value,
                  category: highlightCategory.category,
                })
          }
        >
          {category.map((x) => (
            <option key={x} value={x}>
              {x == highlightCategory.selection ? `🟨 ${x}` : x}{" "}
            </option>
          ))}
        </CategorySelect>
      )}
    </ControlWrapper>
  );
};

const ControlWrapper = styled.div`
  display: flex;
  row-gap: 12px;
  flex-direction: column;
  margin-bottom: 2px;
  label {
    font-size: 20px;
  }
`;
const CategorySelect = styled.select`
  background-color: ${DataLiberationColors.grey};
  color: ${DataLiberationColors.black};
  font-size: 16px;
  padding: 4px;
  min-width: 200px;
`;
const CategoryButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  row-gap: 12px;
  flex-wrap: wrap;
`;

type ButtonType = {
  background: string;
  border: string;
};
const CategoryButton = styled.button<ButtonType>`
  color: ${DataLiberationColors.black};
  background-color: ${(props) => props.background};
  font-size: 16px;
  padding: 4px 4px;
  border: ${(props) => props.border} solid ${DataLiberationColors.black};
`;
