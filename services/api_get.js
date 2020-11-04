import useSWR from "swr";
import api from "../services/Api";
import useAuth, { ProtectRoute } from "../contexts/auth.js";

function api_get() {
  // const [tests, settests] = useState();
  // const [showSkeleton, setshowSkeleton] = useState();
}

export function getCompany(name) {
  const { loading } = useAuth();
  const { data, error } = useSWR(
    loading ? false : "rabwa/getCompany?name=" + name,
    api.get
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function getSponsors(phone, getType) {
  const { loading } = useAuth();
  const { data, error } = useSWR(
    loading
      ? false
      : "rabwa/getSponsors?phone=" + phone + "&getType=" + getType,
    api.get
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function GetFullCCAs(pageup) {
  const { loading } = useAuth();
  const { data, error } = useSWR(
    loading ? false : "rabwa/GetFullCCAs?pageup=" + pageup,
    api.get
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function GetAllMandobes() {
  const { loading } = useAuth();
  const { data, error } = useSWR(
    loading ? false : "rabwa/GetAllMandobes",
    api.get
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function GetC() {
  const { loading } = useAuth();
  const { data, error } = useSWR(loading ? false : "rabwa/GetC", api.get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function CompanysStatistic(name) {
  const { loading } = useAuth();
  const { data, error } = useSWR(
    loading ? false : "rabwa/CompanysStatistic?name=" + name,
    api.get
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function UserStatistics(user_id) {
  const { loading } = useAuth();
  const { data, error } = useSWR(
    loading ? false : "rabwa/UserStatistics?user_id=" + user_id,
    api.get
  );
  return {
    UserStatisticsData: data,
    UserStatisticserrorisLoading: !error && !data,
    UserStatisticserrorisError: error,
  };
}

export function GetApproveMandobes() {
  const { loading } = useAuth();
  const { data, error } = useSWR(
    loading ? false : "rabwa/GetApproveMandobes",
    api.get
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function GetApproveuserssM() {
  const { loading } = useAuth();
  const { data, error } = useSWR(
    loading ? false : "rabwa/GetApproveuserssM",
    api.get
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function GetApproveuserss() {
  const { loading } = useAuth();
  const { data, error } = useSWR(
    loading ? false : "rabwa/GetApproveuserss",
    api.get
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
export function CompanysStatistics() {
  const { loading } = useAuth();
  const { data, error } = useSWR(
    loading ? false : "rabwa/CompanysStatistics",
    api.get
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function getUserCards(user_id) {
  const { loading } = useAuth();
  const { data, error } = useSWR(
    loading ? false : "rabwa/getUserCards?user_id=" + user_id,
    api.get
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function GetMandobes(
  request,
  name,
  page,
  Scity,
  Saera,
  RsName,
  RsPhone
) {
  if (request == "firstTime") {
    const { loading } = useAuth();
    const { data, error } = useSWR(
      loading ? false : "rabwa/GetMandobes",
      api.get
    );
    return {
      data: data,
      isLoading: !error && !data,
      isError: error,
    };
  } else if (request == "custom") {
    const { loading } = useAuth();
    const { data, error } = useSWR(
      loading
        ? false
        : "rabwa/OrderGetMandobes?page=" +
            page +
            "&name=" +
            name +
            "&Scity=" +
            Scity +
            "&Saera=" +
            Saera +
            "&RsName=" +
            RsName +
            "&RsPhone=" +
            RsPhone,

      api.get
    );
    return {
      data: data,
      isLoading: !error && !data,
      isError: error,
    };
  }
}

export function Getuserss2(
  request,
  name,
  members,
  last_coubon,
  total_coubons,
  piority,
  page,
  Scity,
  Saera,
  Scat,
  RsName,
  RsPhone
) {
  if (request == "firstTime") {
    const { loading } = useAuth();
    const { data, error } = useSWR(
      loading ? false : "rabwa/Getuserss2",
      api.get
    );
    return {
      data: data,
      isLoading: !error && !data,
      isError: error,
    };
  } else if (request == "custom") {
    const { loading } = useAuth();
    const { data, error } = useSWR(
      loading
        ? false
        : "rabwa/OrderGetuserss2?page=" +
            page +
            "&name=" +
            name +
            "&members=" +
            members +
            "&last_coubon=" +
            last_coubon +
            "&total_coubons=" +
            total_coubons +
            "&Scity=" +
            Scity +
            "&Saera=" +
            Saera +
            "&Scat=" +
            Scat +
            "&piority=" +
            piority +
            "&RsName=" +
            RsName +
            "&RsPhone=" +
            RsPhone,

      api.get
    );
    return {
      data: data,
      isLoading: !error && !data,
      isError: error,
    };
  }
}

export function GetMandobUsers(
  request,
  name,
  members,
  last_coubon,
  total_coubons,
  piority,
  page,
  Scity,
  Saera,
  Scat,
  RsName,
  RsPhone,
  mandobe_id
) {
  if (request == "firstTime") {
    const { loading } = useAuth();
    const { data, error } = useSWR(
      loading ? false : "rabwa/GetMandobUsers?mandobe_id=" + mandobe_id,
      api.get
    );
    return {
      data: data,
      isLoading: !error && !data,
      isError: error,
    };
  } else if (request == "custom") {
    const { loading } = useAuth();
    const { data, error } = useSWR(
      loading
        ? false
        : "rabwa/OrderGetMandobUsers?page=" +
            page +
            "&name=" +
            name +
            "&members=" +
            members +
            "&last_coubon=" +
            last_coubon +
            "&total_coubons=" +
            total_coubons +
            "&Scity=" +
            Scity +
            "&Saera=" +
            Saera +
            "&Scat=" +
            Scat +
            "&piority=" +
            piority +
            "&RsName=" +
            RsName +
            "&RsPhone=" +
            RsPhone +
            "&mandobe_id=" +
            mandobe_id,

      api.get
    );
    return {
      data: data,
      isLoading: !error && !data,
      isError: error,
    };
  }
}

export function Getuserss(
  request,
  name,
  members,
  last_coubon,
  total_coubons,
  piority,
  page,
  Scity,
  Saera,
  Scat,
  RsName,
  RsPhone,
  hide
) {
  if (request == "firstTime") {
    const { loading } = useAuth();
    const { data, error } = useSWR(
      loading ? false : "rabwa/Getuserss",
      api.get
    );
    return {
      data: data,
      isLoading: !error && !data,
      isError: error,
    };
  } else if (request == "custom") {
    const { loading } = useAuth();
    const { data, error } = useSWR(
      loading
        ? false
        : "rabwa/OrderGetuserss?page=" +
            page +
            "&name=" +
            name +
            "&members=" +
            members +
            "&last_coubon=" +
            last_coubon +
            "&total_coubons=" +
            total_coubons +
            "&Scity=" +
            Scity +
            "&Saera=" +
            Saera +
            "&Scat=" +
            Scat +
            "&piority=" +
            piority +
            "&RsName=" +
            RsName +
            "&RsPhone=" +
            RsPhone +
            "&hide=" +
            hide,

      api.get
    );
    return {
      data: data,
      isLoading: !error && !data,
      isError: error,
    };
  }
}

export function GetCouponsByBracnhCat(Branchid, Categoryid) {
  const { loading } = useAuth();
  const { data, error } = useSWR(
    loading
      ? false
      : "rabwa/GetCouponsByBracnhCat?Branchid=" +
          Branchid +
          "&Categoryid=" +
          Categoryid,
    api.get
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function GetCouponBranches(Section_id) {
  const { loading } = useAuth();
  const { data, error } = useSWR(
    loading ? false : "rabwa/GetCouponBranches?Section_id=" + Section_id,
    api.get
  );
  return {
    CouponBranches: data,
    CouponBranchesisLoading: !error && !data,
    CouponBranchesisError: error,
  };
}
export function GetUserMeta(TheUser_id) {
  const { loading } = useAuth();
  const { data, error } = useSWR(
    loading ? false : "rabwa/GetUserMeta?TheUser_id=" + TheUser_id,
    api.get
  );
  return {
    UserMeta: data,
    UserMetaisLoading: !error && !data,
    UserMetaisError: error,
  };
}

export function GetCategories() {
  const { loading } = useAuth();
  const { data, error } = useSWR(
    loading ? false : "rabwa/GetCategories",
    api.get
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function GetCompanys() {
  const { loading } = useAuth();
  const { data, error } = useSWR(
    loading ? false : "rabwa/GetCompanys",
    api.get
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function GetCategorysByCity(city) {
  const { loading } = useAuth();
  const { data, error } = useSWR(
    loading ? false : "rabwa/GetCategorysByCity?city=" + city,
    api.get
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function GetCouponsBySection(section_id) {
  const { loading } = useAuth();
  const { data, error } = useSWR(
    loading ? false : "rabwa/GetCouponsBySection?section_id=" + section_id,
    api.get
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function GetCouponsBybranch(Id, getType) {
  const { loading } = useAuth();
  const { data, error } = useSWR(
    loading
      ? false
      : "rabwa/GetCouponsBybranch?Id=" + Id + "&getType=" + getType,

    api.get
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function GetCCAs() {
  const { loading } = useAuth();
  const { data, error } = useSWR(loading ? false : "rabwa/GetCCAs", api.get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default api_get;
