import React from "react";
import "./SettingsPage.css";

import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "../../components/ui/tabs";
import NotificationsForm from "../../components/SettingsPage/NotificationsForm";
import ProfileForm from "../../components/SettingsPage/ProfileForm";
import PaymentForm from "../../components/SettingsPage/PaymentForm";

const ProfileTab = () => {
	return (
		<div>
			<div className="space-y-6 mt-4">
				<div>
					<h3 className="text-lg font-medium">Profile</h3>
					<p className="text-sm text-muted-foreground">
						This shows the basic information about you.
					</p>
				</div>
				<ProfileForm />
			</div>
		</div>
	);
};

const NotificationsTab = () => {
	return (
		<div>
			<div className="space-y-6 mt-4">
				<div>
					<h3 className="text-lg font-medium">Notifications</h3>
					<p className="text-sm text-muted-foreground">
						Configure how you receive notifications.
					</p>
				</div>
				<NotificationsForm />
			</div>
		</div>
	);
};
const PaymentTab = () => {
	return (
		<div>
			<div className="space-y-6 mt-4">
				<div>
					<h3 className="text-lg font-medium">Payment</h3>
					<p className="text-sm text-muted-foreground">
						Configure your payment methods.
					</p>
				</div>
				<PaymentForm />
			</div>
		</div>
	);
};
const SettingsPage = () => {
	return (
		<div className="settings-page-container">
			<Tabs defaultValue="profile">
				<div className="border-b">
					<div className="flex h-16 items-center justify-center px-4">
						<div className="flex item-center space-x-4">
							<TabsList>
								<TabsTrigger value="profile">
									Profile
								</TabsTrigger>
								<TabsTrigger value="notifications">
									Notifications
								</TabsTrigger>
								<TabsTrigger value="payment">
									Payment
								</TabsTrigger>
							</TabsList>
						</div>
					</div>
				</div>
				<div className="flex-1 space-y-4 p-8 pt-6">
					<div className="flex flex-col items-start space-y-2">
						<h2 className="text-3xl font-bold tracking-tight">
							Settings
						</h2>

						<TabsContent value="profile">
							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
								<ProfileTab />
							</div>
						</TabsContent>
						<TabsContent value="notifications">
							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
								<NotificationsTab />
							</div>
						</TabsContent>
						<TabsContent value="payment">
							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
								<PaymentTab />
							</div>
						</TabsContent>
					</div>
				</div>
			</Tabs>
		</div>
	);
};

export default SettingsPage;
