import { Button, Text } from "@core/components";
import { IconCar, IconClock, IconCreditCard } from "@tabler/icons-react-native";
import React from "react";
import { View, TouchableOpacity } from "react-native";

export default function AccountWalletHomeScreen() {

    const balance = 85.5;
  const transactions = [
    {
      id: 1,
      type: "deposit",
      amount: 50,
      date: "2023-06-15",
      description: "Added via Credit Card",
      icon: <IconCreditCard width={20} height={20} color="#16a34a" />,
    },
    {
      id: 2,
      type: "ride",
      amount: 12.5,
      date: "2023-06-14",
      description: "Downtown Ride",
      icon: <IconCar width={20} height={20} color="#dc2626" />,
    },
    {
      id: 3,
      type: "deposit",
      amount: 100,
      date: "2023-06-10",
      description: "Bank Transfer",
      icon: <IconCreditCard width={20} height={20} color="#16a34a" />,
    },
    {
      id: 4,
      type: "ride",
      amount: 18.75,
      date: "2023-06-08",
      description: "Airport Trip",
      icon: <IconCar width={20} height={20} color="#dc2626" />,
    },
    {
      id: 5,
      type: "deposit",
      amount: 50,
      date: "2023-06-01",
      description: "Promo Bonus",
      icon: <IconCreditCard width={20} height={20} color="#16a34a" />,
    },
  ];

  return (
    <React.Fragment>
      {/* Balance Card */}
      <View className="bg-white p-6 rounded-xl shadow-lg">
        <Text size="lg" weight="semibold">
          Ride Balance
        </Text>
        <Text className="mt-2" size="3xl" weight="semibold">
          ${balance.toFixed(2)}
        </Text>

        {/* Quick Action - Only Deposit */}
        <View className="mt-2">
          <Button title="Deposit Money" />
        </View>
      </View>

      {/* Recent Activity */}
      <View>
        <View className="flex-row justify-between items-center mb-4">
          <Text weight="semibold" className="text-gray-800">
            Recent Activity
          </Text>
          <TouchableOpacity>
            <Text className="text-primary" weight="semibold">
              See All
            </Text>
          </TouchableOpacity>
        </View>

        {transactions.length === 0 ? (
          <View className="bg-white p-6 rounded-xl items-center justify-center">
            <IconClock width={48} height={48} color="#9ca3af" />
            <Text className="text-gray-500 mt-4">No activity yet</Text>
          </View>
        ) : (
          <View className="bg-white rounded-xl overflow-hidden">
            {transactions.map((transaction) => (
              <View
                key={transaction.id}
                className="border-b border-gray-100 last:border-b-0"
              >
                <TouchableOpacity className="flex-row items-center p-4">
                  <View
                    className={`p-3 rounded-full ${
                      transaction.type === "deposit"
                        ? "bg-green-100"
                        : "bg-red-100"
                    }`}
                  >
                    {transaction.icon}
                  </View>

                  <View className="flex-1 ml-4">
                    <Text className="font-medium text-gray-800">
                      {transaction.description}
                    </Text>
                    <Text className="text-gray-500 text-sm mt-1">
                      {new Date(transaction.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </Text>
                  </View>

                  <Text
                    className={`font-bold ${
                      transaction.type === "deposit"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.type === "deposit" ? "+" : "-"}$
                    {transaction.amount.toFixed(2)}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </View>
    </React.Fragment>
  );
}
