"use client";

import { useMemo, useState } from "react";

export function useChooseServices() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) => {
      if (prev.includes(serviceId)) {
        return prev.filter((id) => id !== serviceId);
      }

      return [...prev, serviceId];
    });
  };

  const selectAllServices = (serviceIds: string[]) => {
    setSelectedServices(serviceIds);
  };

  const clearAllServices = () => {
    setSelectedServices([]);
  };

  const toggleChooseAll = (serviceIds: string[]) => {
    setSelectedServices((prev) => {
      const allSelected = serviceIds.every((id) => prev.includes(id));

      if (allSelected) {
        return [];
      }

      return [...serviceIds];
    });
  };

  const isSelected = (serviceId: string) => {
    return selectedServices.includes(serviceId);
  };

  const isAllSelected = useMemo(() => {
    return (
      serviceIdsLength(selectedServices) > 0 && selectedServices.length === 5
    );
  }, [selectedServices]);

  return {
    selectedServices,

    toggleService,

    toggleChooseAll,

    selectAllServices,

    clearAllServices,

    isSelected,

    isAllSelected,
  };
}

function serviceIdsLength(ids: string[]) {
  return ids.filter((id) => id !== "all").length;
}
