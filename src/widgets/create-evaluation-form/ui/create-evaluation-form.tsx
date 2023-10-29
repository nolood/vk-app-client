import Back from "../../../shared/ui/back";
import { MAIN_ROUTE } from "../../../app/paths";
import CriteriaAdd from "../../../features/criteria-add/ui/criteria-add";
import { Button, ChipsSelect, Input, TextArea } from "../../../shared/ui";
import Balance from "../../../shared/ui/balance";
import { ImageUpload } from "../../../features/image-upload/ui";
import Checkbox from "../../../shared/ui/checkbox";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  Category,
  fetchCategoriesFx,
} from "../../../entities/category/lib/categoryEffects";
import { useForm } from "effector-forms";
import { createEvaluationForm } from "../model/create-evaluation-form";
import { useStore } from "effector-react";
import { $criteria } from "../../../features/criteria-add/model/criteria";

const CreateEvaluationForm = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const criteria = useStore($criteria);

  const { fields, submit } = useForm(createEvaluationForm);

  const fetchCategories = async () => {
    const categories = await fetchCategoriesFx();
    setCategories(categories);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  useEffect(() => {
    fields.criteria?.onChange(criteria);
  }, [criteria]);

  return (
    <div className="w-full pb-[20px] pl-[20px] pr-[35px]">
      <div className="w-full mb-[20px] flex items-center justify-between">
        <Back />
        <Balance variant={"light"} />
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-[20px]">
        <Input
          placeholder={"Введите название оценивания..."}
          className="w-full"
          maxLength={70}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            fields.title?.onChange(e.target.value)
          }
          value={fields.title?.value}
        />
        <ImageUpload
          image={fields.image?.value}
          onChange={(file) => fields.image?.onChange(file as null)}
        />
        <TextArea
          className="w-full  h-[200px]"
          maxLength={500}
          placeholder={"Введите описание оценивания..."}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            fields.description?.onChange(e.target.value)
          }
          value={fields.description?.value}
        />
        <CriteriaAdd />
        <ChipsSelect
          onSelectedChange={(selected) => fields.categories?.onChange(selected)}
          onDropDownVisibleChange={(open) =>
            open && !categories.length && fetchCategories()
          }
          options={categories?.map((item) => ({
            value: item.id,
            label: item.value,
          }))}
          placeholder={"Выберите категории"}
        />
        <Checkbox
          checked={fields.private?.value}
          onChange={(e) => fields.private?.onChange(e)}
        >
          Приватное оценивание
        </Checkbox>
        <Button>Создать оценивание</Button>
      </form>
    </div>
  );
};

export default CreateEvaluationForm;
